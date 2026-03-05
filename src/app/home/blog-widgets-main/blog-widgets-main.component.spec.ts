import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogWidgetsMainComponent } from './blog-widgets-main.component';

describe('BlogWidgetsMainComponent', () => {
  let component: BlogWidgetsMainComponent;
  let fixture: ComponentFixture<BlogWidgetsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogWidgetsMainComponent]
    });
    fixture = TestBed.createComponent(BlogWidgetsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
