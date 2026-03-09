import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-hero-banner',
  templateUrl: './home-hero-banner.component.html',
  styleUrls: ['./home-hero-banner.component.css']
})
export class HomeHeroBannerComponent {


  constructor(private route:Router){}

  routetospeakingtopage(){
    this.route.navigate(['/home/speaking-to'])

  }
}
