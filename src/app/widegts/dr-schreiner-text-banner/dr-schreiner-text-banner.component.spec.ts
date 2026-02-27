import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrSchreinerTextBannerComponent } from './dr-schreiner-text-banner.component';

describe('DrSchreinerTextBannerComponent', () => {
  let component: DrSchreinerTextBannerComponent;
  let fixture: ComponentFixture<DrSchreinerTextBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrSchreinerTextBannerComponent]
    });
    fixture = TestBed.createComponent(DrSchreinerTextBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
