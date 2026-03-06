import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) {}
ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }
  goToBook(): void {
    this.router.navigate(['/home/book']);
  }

  goToContact(): void {
    this.router.navigate(['/home/contact']);
  }
}