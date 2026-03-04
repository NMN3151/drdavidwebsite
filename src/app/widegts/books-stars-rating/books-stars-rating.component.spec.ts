import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksStarsRatingComponent } from './books-stars-rating.component';

describe('BooksStarsRatingComponent', () => {
  let component: BooksStarsRatingComponent;
  let fixture: ComponentFixture<BooksStarsRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksStarsRatingComponent]
    });
    fixture = TestBed.createComponent(BooksStarsRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
