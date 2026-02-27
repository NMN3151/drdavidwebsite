import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeroBannerComponent } from './home-hero-banner.component';

describe('HomeHeroBannerComponent', () => {
  let component: HomeHeroBannerComponent;
  let fixture: ComponentFixture<HomeHeroBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHeroBannerComponent]
    });
    fixture = TestBed.createComponent(HomeHeroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
