import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinciplesAndPracticesToSuperchargeComponent } from './principles-and-practices-to-supercharge.component';

describe('PrinciplesAndPracticesToSuperchargeComponent', () => {
  let component: PrinciplesAndPracticesToSuperchargeComponent;
  let fixture: ComponentFixture<PrinciplesAndPracticesToSuperchargeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrinciplesAndPracticesToSuperchargeComponent]
    });
    fixture = TestBed.createComponent(PrinciplesAndPracticesToSuperchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
