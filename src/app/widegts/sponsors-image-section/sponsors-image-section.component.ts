import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sponsors-image-section',
  templateUrl: './sponsors-image-section.component.html',
  styleUrls: ['./sponsors-image-section.component.css']
})
export class SponsorsImageSectionComponent implements OnInit {

  // Default route images
  private defaultRow1 = [
    { src: '../../../assets/images/sponserimage11.png', alt: 'Sponsor 11' },
    { src: '../../../assets/images/sponserimage10.png', alt: 'Sponsor 10' },
    { src: '../../../assets/images/sponserimage9.png',  alt: 'Sponsor 9'  },
    { src: '../../../assets/images/sponserimage8.png',  alt: 'Sponsor 8'  },
    { src: '../../../assets/images/sponserimage7.png',  alt: 'Sponsor 7'  },
    { src: '../../../assets/images/sponserimage6.png',  alt: 'Sponsor 6'  },
  ];

  private defaultRow2 = [
    { src: '../../../assets/images/sponserimage5.png', alt: 'Sponsor 5' },
    { src: '../../../assets/images/sponserimage4.png', alt: 'Sponsor 4' },
    { src: '../../../assets/images/sponserimage3.png', alt: 'Sponsor 3' },
    { src: '../../../assets/images/sponserimage2.png', alt: 'Sponsor 2' },
    { src: '../../../assets/images/sponserimage1.png', alt: 'Sponsor 1' },
  ];

  // speaking-to route images
  private speakingRow1 = [
    { src: '../../../assets/images/sponserimage5.png', alt: 'Sponsor 5' },
    { src: '../../../assets/images/sponserimage4.png', alt: 'Sponsor 10' },
    { src: '../../../assets/images/sponserimage7.png',  alt: 'Sponsor 9'  },
    { src: '../../../assets/images/sponserimage6.png',  alt: 'Sponsor 8'  }, 
  ];

  private speakingRow2 = [
    { src: '../../../assets/images/sponserimage3.png', alt: 'Sponsor 3' },
    { src: '../../../assets/images/sponserimage2.png', alt: 'Sponsor 2' },
    { src: '../../../assets/images/sponserimage1.png', alt: 'Sponsor 1' },
  ];

  // Active display arrays (bound in template)
  sponsorsRow1: { src: string; alt: string }[] = [];
  sponsorsRow2: { src: string; alt: string }[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateSponsors(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.updateSponsors((event as NavigationEnd).urlAfterRedirects);
      });
  }

  private updateSponsors(url: string): void {
    if (this.hasChildRoute(url)) {
      this.sponsorsRow1 = [...this.speakingRow1];
      this.sponsorsRow2 = [...this.speakingRow2];
    } else {
      this.sponsorsRow1 = [...this.defaultRow1];
      this.sponsorsRow2 = [...this.defaultRow2];
    }
  }

  private hasChildRoute(url: string): boolean {
    return url.includes('home/speaking-to');
  }
}