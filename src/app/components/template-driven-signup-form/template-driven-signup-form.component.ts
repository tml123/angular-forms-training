import { Customer } from '../../customer';
import { Component, OnInit } from '@angular/core';

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

  // add a method to save()
  // it should take an NgForm as a param

}
