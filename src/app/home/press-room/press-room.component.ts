import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-press-room',
  templateUrl: './press-room.component.html',
  styleUrls: ['./press-room.component.css']
})
export class PressRoomComponent implements OnInit{

  constructor(private router: Router) {}
  ngOnInit(): void {
       window.scrollTo({ top: 0, behavior: 'smooth'});

  }

  // Open a PDF in a new browser tab
  openPdf(path: string): void {
    window.open(path, '_blank');
  }

  // Open an external URL in a new browser tab
  openExternalLink(url: string): void {
    window.open(url, '_blank');
  }

  // Navigate to an internal Angular route
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  // Trigger a file download
  downloadFile(path: string, filename: string): void {
    const anchor = document.createElement('a');
    anchor.href = path;
    anchor.download = filename;
    anchor.target = '_blank';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}