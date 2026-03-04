import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAvailableForOrderTodayComponent } from './books-available-for-order-today.component';

describe('BooksAvailableForOrderTodayComponent', () => {
  let component: BooksAvailableForOrderTodayComponent;
  let fixture: ComponentFixture<BooksAvailableForOrderTodayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksAvailableForOrderTodayComponent]
    });
    fixture = TestBed.createComponent(BooksAvailableForOrderTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
