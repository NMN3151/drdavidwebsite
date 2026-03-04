import { Component } from '@angular/core';

@Component({
  selector: 'app-books-available-for-order-today',
  templateUrl: './books-available-for-order-today.component.html',
  styleUrls: ['./books-available-for-order-today.component.css']
})
export class BooksAvailableForOrderTodayComponent {

  orderOnAmazon(): void {
    window.open(
      'https://www.amazon.com/Best-Part-Their-Supercharging',
      '_blank',
      'noopener,noreferrer'
    );
  }

  downloadOnAudible(): void {
    window.open(
      'https://www.audible.com/search?keywords=Be+the+best+part+of+the+da',
      '_blank',
      'noopener,noreferrer'
    );
  }
}