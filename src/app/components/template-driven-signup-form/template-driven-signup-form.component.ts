import { Customer } from '../../customer';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-signup-form',
  templateUrl: './template-driven-signup-form.component.html',
  styleUrls: ['./template-driven-signup-form.component.css']
})
export class TemplateDrivenSignupFormComponent implements OnInit {

  customer = new Customer();

  constructor() { }

  ngOnInit() {
  }

  save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }

}
