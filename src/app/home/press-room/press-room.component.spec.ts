import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressRoomComponent } from './press-room.component';

describe('PressRoomComponent', () => {
  let component: PressRoomComponent;
  let fixture: ComponentFixture<PressRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PressRoomComponent]
    });
    fixture = TestBed.createComponent(PressRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
