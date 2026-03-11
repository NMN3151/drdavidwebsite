import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pod-casts',
  templateUrl: './pod-casts.component.html',
  styleUrls: ['./pod-casts.component.css']
})
export class PodCastsComponent implements OnInit{
  ngOnInit(): void {
        window.scrollTo({ top: 0, behavior: 'smooth'});

  }

  activeModal: string = '';

  openVideo(key: string): void {
    this.activeModal = key;
    document.body.style.overflow = 'hidden';
  }

  closeVideo(): void {
    this.activeModal = '';
    document.body.style.overflow = '';
  }

  openSpotify(link: string): void {
    window.open(link, '_blank');
  }
}