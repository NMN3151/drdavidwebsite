import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sponsors-image-section',
  templateUrl: './sponsors-image-section.component.html',
  styleUrls: ['./sponsors-image-section.component.css']
})
export class SponsorsImageSectionComponent implements OnInit {

  sponsorsRow1 = [
    { src: '../../../assets/images/sponserimage11.png', alt: 'Sponsor 11' },
    { src: '../../../assets/images/sponserimage10.png', alt: 'Sponsor 10' },
    { src: '../../../assets/images/sponserimage9.png',  alt: 'Sponsor 9'  },
    { src: '../../../assets/images/sponserimage8.png',  alt: 'Sponsor 8'  },
    { src: '../../../assets/images/sponserimage7.png',  alt: 'Sponsor 7'  },
    { src: '../../../assets/images/sponserimage6.png',  alt: 'Sponsor 6'  },
  ];

  private allSponsorRow2 = [
    { src: '../../../assets/images/sponserimage5.png', alt: 'Sponsor 5' },
    { src: '../../../assets/images/sponserimage4.png', alt: 'Sponsor 4' },
    { src: '../../../assets/images/sponserimage3.png', alt: 'Sponsor 3' },
    { src: '../../../assets/images/sponserimage2.png', alt: 'Sponsor 2' },
    { src: '../../../assets/images/sponserimage1.png', alt: 'Sponsor 1' },
  ];

  // Srcs to hide when route contains a segment (e.g. /home/speaking-to)
  private hiddenOnSubRoutes = [
    '../../../assets/images/sponserimage5.png',
    '../../../assets/images/sponserimage4.png',
  ];

  sponsorsRow2 = [...this.allSponsorRow2];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Run on initial load
    this.filterRow2(this.router.url);

    // Re-run on every subsequent navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.filterRow2((event as NavigationEnd).urlAfterRedirects);
      });
  }

  private filterRow2(url: string): void {
    const hasSubRoute = this.hasChildRoute(url);

    this.sponsorsRow2 = hasSubRoute
      ? this.allSponsorRow2.filter(s => !this.hiddenOnSubRoutes.includes(s.src))
      : [...this.allSponsorRow2];
  }

  private hasChildRoute(url: string): boolean {
    return url.includes('home/speaking-to');
  }
}