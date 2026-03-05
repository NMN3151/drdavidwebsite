import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareIsARightComponent } from './healthcare-is-a-right.component';

describe('HealthcareIsARightComponent', () => {
  let component: HealthcareIsARightComponent;
  let fixture: ComponentFixture<HealthcareIsARightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthcareIsARightComponent]
    });
    fixture = TestBed.createComponent(HealthcareIsARightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
