import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private router: Router) {}

  goToBook(): void {
    this.router.navigate(['/home/book']);
  }

  goToContact(): void {
    this.router.navigate(['/home/contact']);
  }
}