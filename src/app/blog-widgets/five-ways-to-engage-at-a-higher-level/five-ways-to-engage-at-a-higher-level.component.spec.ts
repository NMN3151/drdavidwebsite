import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveWaysToEngageAtAHigherLevelComponent } from './five-ways-to-engage-at-a-higher-level.component';

describe('FiveWaysToEngageAtAHigherLevelComponent', () => {
  let component: FiveWaysToEngageAtAHigherLevelComponent;
  let fixture: ComponentFixture<FiveWaysToEngageAtAHigherLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiveWaysToEngageAtAHigherLevelComponent]
    });
    fixture = TestBed.createComponent(FiveWaysToEngageAtAHigherLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
