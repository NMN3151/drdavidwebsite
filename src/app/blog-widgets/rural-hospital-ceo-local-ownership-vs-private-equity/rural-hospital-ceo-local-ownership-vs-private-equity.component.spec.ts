import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralHospitalCeoLocalOwnershipVsPrivateEquityComponent } from './rural-hospital-ceo-local-ownership-vs-private-equity.component';

describe('RuralHospitalCeoLocalOwnershipVsPrivateEquityComponent', () => {
  let component: RuralHospitalCeoLocalOwnershipVsPrivateEquityComponent;
  let fixture: ComponentFixture<RuralHospitalCeoLocalOwnershipVsPrivateEquityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuralHospitalCeoLocalOwnershipVsPrivateEquityComponent]
    });
    fixture = TestBed.createComponent(RuralHospitalCeoLocalOwnershipVsPrivateEquityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
