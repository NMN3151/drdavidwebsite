import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingWithLoveComponent } from './leading-with-love.component';

describe('LeadingWithLoveComponent', () => {
  let component: LeadingWithLoveComponent;
  let fixture: ComponentFixture<LeadingWithLoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadingWithLoveComponent]
    });
    fixture = TestBed.createComponent(LeadingWithLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
