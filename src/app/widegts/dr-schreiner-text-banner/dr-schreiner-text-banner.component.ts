import { Component } from '@angular/core';

@Component({
  selector: 'app-dr-schreiner-text-banner',
  templateUrl: './dr-schreiner-text-banner.component.html',
  styleUrls: ['./dr-schreiner-text-banner.component.css']
})
export class DrSchreinerTextBannerComponent {

  onBook(): void {
    // Handle booking action
    console.log('Book Dr. Schreiner clicked');
  }

  onContact(): void {
    // Handle contact action
    console.log('Contact Dr. Schreiner clicked');
  }
}