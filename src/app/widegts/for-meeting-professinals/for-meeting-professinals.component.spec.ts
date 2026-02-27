import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForMeetingProfessinalsComponent } from './for-meeting-professinals.component';

describe('ForMeetingProfessinalsComponent', () => {
  let component: ForMeetingProfessinalsComponent;
  let fixture: ComponentFixture<ForMeetingProfessinalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForMeetingProfessinalsComponent]
    });
    fixture = TestBed.createComponent(ForMeetingProfessinalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
