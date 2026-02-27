import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsImageSectionComponent } from './sponsors-image-section.component';

describe('SponsorsImageSectionComponent', () => {
  let component: SponsorsImageSectionComponent;
  let fixture: ComponentFixture<SponsorsImageSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SponsorsImageSectionComponent]
    });
    fixture = TestBed.createComponent(SponsorsImageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
