import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsPartnerTogatherComponent } from './lets-partner-togather.component';

describe('LetsPartnerTogatherComponent', () => {
  let component: LetsPartnerTogatherComponent;
  let fixture: ComponentFixture<LetsPartnerTogatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetsPartnerTogatherComponent]
    });
    fixture = TestBed.createComponent(LetsPartnerTogatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
