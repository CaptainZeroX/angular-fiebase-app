import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailComponentComponent } from './verify-email-component.component';

describe('VerifyEmailComponentComponent', () => {
  let component: VerifyEmailComponentComponent;
  let fixture: ComponentFixture<VerifyEmailComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyEmailComponentComponent]
    });
    fixture = TestBed.createComponent(VerifyEmailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
