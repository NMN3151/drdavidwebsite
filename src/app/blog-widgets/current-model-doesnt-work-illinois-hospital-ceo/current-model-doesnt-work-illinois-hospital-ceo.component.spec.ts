import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentModelDoesntWorkIllinoisHospitalCeoComponent } from './current-model-doesnt-work-illinois-hospital-ceo.component';

describe('CurrentModelDoesntWorkIllinoisHospitalCeoComponent', () => {
  let component: CurrentModelDoesntWorkIllinoisHospitalCeoComponent;
  let fixture: ComponentFixture<CurrentModelDoesntWorkIllinoisHospitalCeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentModelDoesntWorkIllinoisHospitalCeoComponent]
    });
    fixture = TestBed.createComponent(CurrentModelDoesntWorkIllinoisHospitalCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
