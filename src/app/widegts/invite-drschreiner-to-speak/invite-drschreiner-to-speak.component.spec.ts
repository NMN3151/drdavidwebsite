import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteDrschreinerToSpeakComponent } from './invite-drschreiner-to-speak.component';

describe('InviteDrschreinerToSpeakComponent', () => {
  let component: InviteDrschreinerToSpeakComponent;
  let fixture: ComponentFixture<InviteDrschreinerToSpeakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InviteDrschreinerToSpeakComponent]
    });
    fixture = TestBed.createComponent(InviteDrschreinerToSpeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
