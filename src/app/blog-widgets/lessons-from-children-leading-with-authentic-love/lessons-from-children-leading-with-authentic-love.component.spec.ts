import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsFromChildrenLeadingWithAuthenticLoveComponent } from './lessons-from-children-leading-with-authentic-love.component';

describe('LessonsFromChildrenLeadingWithAuthenticLoveComponent', () => {
  let component: LessonsFromChildrenLeadingWithAuthenticLoveComponent;
  let fixture: ComponentFixture<LessonsFromChildrenLeadingWithAuthenticLoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonsFromChildrenLeadingWithAuthenticLoveComponent]
    });
    fixture = TestBed.createComponent(LessonsFromChildrenLeadingWithAuthenticLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
