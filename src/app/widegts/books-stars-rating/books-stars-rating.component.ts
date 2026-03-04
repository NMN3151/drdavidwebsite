import { Component } from '@angular/core';

interface Review {
  text: string;
  author: string;
}

@Component({
  selector: 'app-books-stars-rating',
  templateUrl: './books-stars-rating.component.html',
  styleUrls: ['./books-stars-rating.component.css']
})
export class BooksStarsRatingComponent {

  stars: number[] = [1, 2, 3, 4, 5];

  reviews: Review[] = [
    {
      text: 'Every day, I see how positive communication energizes people, from sharing bright spots, to storytelling, to just saying thank you. David Schreiner gets it. Be the Best Part of Their Day is a powerful statement on looking at the world through the lens of what\'s right rather than what\'s wrong. Right from his book\'s title, Schreiner reminds us of the difference we can make in people\'s lives when we choose to approach them with a mindset of abundance, appreciation, and love. I am grateful for David, his message, and his sincere desire to make healthcare better.',
      author: 'QUINT STUDER, Author of The Calling: Why Healthcare Is So Special'
    },
    {
      text: 'Dr. Schreiner\'s Be the Best Part of Their Day masterfully presents a case for the role of positivity, appreciation, and values in effective leadership. He offers practical strategies and concrete examples, demonstrating the impact of aligning your communication and leadership with core values. This book is a beacon of hope, illuminating a path to success that is both effective and deeply meaningful.',
      author: 'HUBERT JOLY, Former Best Buy CEO; Senior Lecturer, Harvard Business School; Author of The Heart of Business'
    }
  ];
}