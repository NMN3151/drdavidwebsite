import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyDoctorDavidComponent } from './why-doctor-david.component';

describe('WhyDoctorDavidComponent', () => {
  let component: WhyDoctorDavidComponent;
  let fixture: ComponentFixture<WhyDoctorDavidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyDoctorDavidComponent]
    });
    fixture = TestBed.createComponent(WhyDoctorDavidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
