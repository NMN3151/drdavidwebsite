import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoverTroubleComponent } from './turnover-trouble.component';

describe('TurnoverTroubleComponent', () => {
  let component: TurnoverTroubleComponent;
  let fixture: ComponentFixture<TurnoverTroubleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurnoverTroubleComponent]
    });
    fixture = TestBed.createComponent(TurnoverTroubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
