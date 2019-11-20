import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenSignupFormComponent } from './template-driven-signup-form.component';

describe('TemplateDrivenSignupFormComponent', () => {
  let component: TemplateDrivenSignupFormComponent;
  let fixture: ComponentFixture<TemplateDrivenSignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenSignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
