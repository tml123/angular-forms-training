import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveSignupFormComponent } from './components/reactive-signup-form/reactive-signup-form.component';
import { TemplateDrivenSignupFormComponent } from './components/template-driven-signup-form/template-driven-signup-form.component';
import { TemplateDrivenLoginSignupComponent } from './components/template-driven-login-signup/template-driven-login-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveSignupFormComponent,
    TemplateDrivenSignupFormComponent,
    TemplateDrivenLoginSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
