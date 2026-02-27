import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisIsBetterWayComponent } from './this-is-better-way.component';

describe('ThisIsBetterWayComponent', () => {
  let component: ThisIsBetterWayComponent;
  let fixture: ComponentFixture<ThisIsBetterWayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThisIsBetterWayComponent]
    });
    fixture = TestBed.createComponent(ThisIsBetterWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
