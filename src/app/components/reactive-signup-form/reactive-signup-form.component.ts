import { Customer } from './../../customer';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  // TODO: Implement the function to match emails
}

function ratingRange(min: number, max: number): ValidatorFn {
  // TODO: return the appropriate ValidatoFn
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
    this.employeeForm = // TODO: Create the form group with the appropriate fields

    const emailControl = this.employeeForm.get('emailGroup.email');

    // TODO: Watch the changes on the emailControl.valueChanges to only trigger
    // every 1000 ms or so
    emailControl.valueChanges.pipe(
      // TODO:
    ).subscribe(
      value => this.setMessage(emailControl)
    );
  }

  addDependant(): void {
    this.dependants.push(this.buildDependant());
  }

  buildDependant(): FormGroup {
    // TODO: Return a formGroup that represents a dependant
  }

  populateTestData(): void {
    // TODO: use form.patchValue to pass in some values at first
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
