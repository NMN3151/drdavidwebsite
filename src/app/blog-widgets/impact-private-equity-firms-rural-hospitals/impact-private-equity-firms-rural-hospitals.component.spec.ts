import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactPrivateEquityFirmsRuralHospitalsComponent } from './impact-private-equity-firms-rural-hospitals.component';

describe('ImpactPrivateEquityFirmsRuralHospitalsComponent', () => {
  let component: ImpactPrivateEquityFirmsRuralHospitalsComponent;
  let fixture: ComponentFixture<ImpactPrivateEquityFirmsRuralHospitalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactPrivateEquityFirmsRuralHospitalsComponent]
    });
    fixture = TestBed.createComponent(ImpactPrivateEquityFirmsRuralHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
