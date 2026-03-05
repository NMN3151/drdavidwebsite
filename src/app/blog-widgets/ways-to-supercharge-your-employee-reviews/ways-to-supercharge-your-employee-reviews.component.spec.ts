import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaysToSuperchargeYourEmployeeReviewsComponent } from './ways-to-supercharge-your-employee-reviews.component';

describe('WaysToSuperchargeYourEmployeeReviewsComponent', () => {
  let component: WaysToSuperchargeYourEmployeeReviewsComponent;
  let fixture: ComponentFixture<WaysToSuperchargeYourEmployeeReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaysToSuperchargeYourEmployeeReviewsComponent]
    });
    fixture = TestBed.createComponent(WaysToSuperchargeYourEmployeeReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
