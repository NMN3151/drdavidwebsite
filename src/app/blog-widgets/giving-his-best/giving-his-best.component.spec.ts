import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivingHisBestComponent } from './giving-his-best.component';

describe('GivingHisBestComponent', () => {
  let component: GivingHisBestComponent;
  let fixture: ComponentFixture<GivingHisBestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GivingHisBestComponent]
    });
    fixture = TestBed.createComponent(GivingHisBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
