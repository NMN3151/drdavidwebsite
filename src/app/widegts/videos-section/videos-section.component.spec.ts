import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosSectionComponent } from './videos-section.component';

describe('VideosSectionComponent', () => {
  let component: VideosSectionComponent;
  let fixture: ComponentFixture<VideosSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideosSectionComponent]
    });
    fixture = TestBed.createComponent(VideosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
