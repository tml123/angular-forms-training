import { Customer } from './../../customer';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');
  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { match: true };
}

function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { range: true };
    }
    return null;
  };
}
@Component({
  selector: 'app-reactive-signup-form',
  templateUrl: './reactive-signup-form.component.html',
  styleUrls: ['./reactive-signup-form.component.css']
})
export class ReactiveSignupFormComponent implements OnInit {
  employeeForm: FormGroup;
  customer = new Customer();
  emailMessage: string;

  get dependants(): FormArray {
    return this.employeeForm.get('dependants') as FormArray;
  }

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      }, { validator: emailMatcher }),
      addDependant: false,
      dependants: this.fb.array([this.buildDependant()])
    });

    const emailControl = this.employeeForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setMessage(emailControl)
    );
  }

  addDependant(): void {
    this.dependants.push(this.buildDependant());
  }

  buildDependant(): FormGroup {
    return this.fb.group({
      dependantName: [''],
      dependantType: ['spouse'],
      dependantAge: [null],
      dependantSocialSecurityNumber: ['']
    });
  }

  populateTestData(): void {
    this.employeeForm.patchValue({
      firstName: 'Jack',
      lastName: 'Sprat',
      emailGroup: { email: 'couldeat@nofat.com', confirmEmail: 'couldeat@nofat.com' }
    });
    const dependantGroup = this.buildDependant();
    this.employeeForm.setControl('dependants', this.fb.array([dependantGroup]));
  }

  save() {
    console.log(this.employeeForm);
    console.log('Saved: ' + JSON.stringify(this.employeeForm.value));
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.validationMessages[key]).join(' ');
    }
  }
}
