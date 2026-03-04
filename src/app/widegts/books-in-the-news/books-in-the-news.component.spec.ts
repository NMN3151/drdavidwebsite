import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksInTheNewsComponent } from './books-in-the-news.component';

describe('BooksInTheNewsComponent', () => {
  let component: BooksInTheNewsComponent;
  let fixture: ComponentFixture<BooksInTheNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksInTheNewsComponent]
    });
    fixture = TestBed.createComponent(BooksInTheNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
