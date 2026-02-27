import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoOnYourTeamComponent } from './who-on-your-team.component';

describe('WhoOnYourTeamComponent', () => {
  let component: WhoOnYourTeamComponent;
  let fixture: ComponentFixture<WhoOnYourTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoOnYourTeamComponent]
    });
    fixture = TestBed.createComponent(WhoOnYourTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
