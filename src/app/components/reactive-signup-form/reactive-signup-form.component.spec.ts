import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSignupFormComponent } from './reactive-signup-form.component';

describe('ReactiveSignupFormComponent', () => {
  let component: ReactiveSignupFormComponent;
  let fixture: ComponentFixture<ReactiveSignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
