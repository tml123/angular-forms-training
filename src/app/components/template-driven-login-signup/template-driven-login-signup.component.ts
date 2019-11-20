import { User } from '../../user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-login-signup',
  templateUrl: './template-driven-login-signup.component.html',
  styleUrls: ['./template-driven-login-signup.component.css']
})
export class TemplateDrivenLoginSignupComponent implements OnInit {
  user = new User();
  constructor() { }

  ngOnInit() {
  }

  save(form: NgForm) {
    console.log(form);
  }

}
