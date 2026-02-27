import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakingToComponent } from './speaking-to.component';

describe('SpeakingToComponent', () => {
  let component: SpeakingToComponent;
  let fixture: ComponentFixture<SpeakingToComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakingToComponent]
    });
    fixture = TestBed.createComponent(SpeakingToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
