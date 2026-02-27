import { Component } from '@angular/core';

@Component({
  selector: 'app-home-hero-banner',
  templateUrl: './home-hero-banner.component.html',
  styleUrls: ['./home-hero-banner.component.css']
})
export class HomeHeroBannerComponent {
videoOpen = false;

  openVideo(): void {
    this.videoOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeVideo(): void {
    this.videoOpen = false;
    document.body.style.overflow = '';
  }
}
