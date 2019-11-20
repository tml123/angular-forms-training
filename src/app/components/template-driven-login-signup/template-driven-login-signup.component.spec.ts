import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenLoginSignupComponent } from './template-driven-login-signup.component';

describe('TemplateDrivenLoginSignupComponent', () => {
  let component: TemplateDrivenLoginSignupComponent;
  let fixture: ComponentFixture<TemplateDrivenLoginSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenLoginSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenLoginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
