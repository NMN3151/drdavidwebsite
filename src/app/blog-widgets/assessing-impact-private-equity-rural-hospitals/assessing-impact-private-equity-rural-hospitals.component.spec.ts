import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessingImpactPrivateEquityRuralHospitalsComponent } from './assessing-impact-private-equity-rural-hospitals.component';

describe('AssessingImpactPrivateEquityRuralHospitalsComponent', () => {
  let component: AssessingImpactPrivateEquityRuralHospitalsComponent;
  let fixture: ComponentFixture<AssessingImpactPrivateEquityRuralHospitalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessingImpactPrivateEquityRuralHospitalsComponent]
    });
    fixture = TestBed.createComponent(AssessingImpactPrivateEquityRuralHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
