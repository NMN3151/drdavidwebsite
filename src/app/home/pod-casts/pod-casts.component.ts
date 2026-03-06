import { Component } from '@angular/core';

@Component({
  selector: 'app-pod-casts',
  templateUrl: './pod-casts.component.html',
  styleUrls: ['./pod-casts.component.css']
})
export class PodCastsComponent {

  activeModal: string = '';

  openVideo(key: string): void {
    this.activeModal = key;
    document.body.style.overflow = 'hidden';
  }

  closeVideo(): void {
    this.activeModal = '';
    document.body.style.overflow = '';
  }

  openSpotify(): void {
    window.open('https://open.spotify.com/search', '_blank');
  }
}