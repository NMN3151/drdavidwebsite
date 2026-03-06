import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodCastsComponent } from './pod-casts.component';

describe('PodCastsComponent', () => {
  let component: PodCastsComponent;
  let fixture: ComponentFixture<PodCastsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodCastsComponent]
    });
    fixture = TestBed.createComponent(PodCastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
