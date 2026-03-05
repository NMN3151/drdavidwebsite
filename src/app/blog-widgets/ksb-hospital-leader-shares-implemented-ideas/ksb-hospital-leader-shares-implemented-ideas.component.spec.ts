import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsbHospitalLeaderSharesImplementedIdeasComponent } from './ksb-hospital-leader-shares-implemented-ideas.component';

describe('KsbHospitalLeaderSharesImplementedIdeasComponent', () => {
  let component: KsbHospitalLeaderSharesImplementedIdeasComponent;
  let fixture: ComponentFixture<KsbHospitalLeaderSharesImplementedIdeasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KsbHospitalLeaderSharesImplementedIdeasComponent]
    });
    fixture = TestBed.createComponent(KsbHospitalLeaderSharesImplementedIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
