import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralHospitalsStruggleUnderPrivateEquityOwnershipComponent } from './rural-hospitals-struggle-under-private-equity-ownership.component';

describe('RuralHospitalsStruggleUnderPrivateEquityOwnershipComponent', () => {
  let component: RuralHospitalsStruggleUnderPrivateEquityOwnershipComponent;
  let fixture: ComponentFixture<RuralHospitalsStruggleUnderPrivateEquityOwnershipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuralHospitalsStruggleUnderPrivateEquityOwnershipComponent]
    });
    fixture = TestBed.createComponent(RuralHospitalsStruggleUnderPrivateEquityOwnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
