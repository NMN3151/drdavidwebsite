import { Component } from '@angular/core';

interface NewsArticle {
  title: string;
  url: string;
}

@Component({
  selector: 'app-books-in-the-news',
  templateUrl: './books-in-the-news.component.html',
  styleUrls: ['./books-in-the-news.component.css']
})
export class BooksInTheNewsComponent {

  newsArticles: NewsArticle[] = [
    {
      title: '3 Ways To Supercharge Your Employee Reviews',
      url: '#'
    },
    {
      title: 'From good to great, how to strengthen the CEO-CFO relationship',
      url: '#'
    },
    {
      title: 'Principles And Practices To Supercharge',
      url: '#'
    },
    {
      title: '5 ways to engage at a higher level with colleagues and team members',
      url: '#'
    },
    {
      title: 'Rural Hospitals Struggle Under Private Equity Ownership',
      url: '#'
    }
  ];

  orderBook(): void {
    window.open(
      'https://www.amazon.com/Best-Part-Their-Supercharging-Communication/dp/1642257605',
      '_blank',
      'noopener,noreferrer'
    );
  }

  learnMoreSpeaking(): void {
    window.open(
      'https://drdavidschreiner.com/public-speaking/',
      '_blank',
      'noopener,noreferrer'
    );
  }

  viewAllNews(): void {
    // Route to news listing page — update path as needed
    window.location.href = '/news';
  }
}