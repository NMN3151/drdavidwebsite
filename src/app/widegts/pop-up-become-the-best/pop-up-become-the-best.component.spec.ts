import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpBecomeTheBestComponent } from './pop-up-become-the-best.component';

describe('PopUpBecomeTheBestComponent', () => {
  let component: PopUpBecomeTheBestComponent;
  let fixture: ComponentFixture<PopUpBecomeTheBestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpBecomeTheBestComponent]
    });
    fixture = TestBed.createComponent(PopUpBecomeTheBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
