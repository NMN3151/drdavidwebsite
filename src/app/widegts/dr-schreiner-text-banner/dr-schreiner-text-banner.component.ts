import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dr-schreiner-text-banner',
  templateUrl: './dr-schreiner-text-banner.component.html',
  styleUrls: ['./dr-schreiner-text-banner.component.css']
})
export class DrSchreinerTextBannerComponent {

  constructor(private router:Router){}
  
  onBook(): void {
    console.log('Book Dr. Schreiner clicked');
  }

  onContact(): void {
    console.log('Contact Dr. Schreiner clicked');
  }


    bookdr(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/speaking-to'], {
        fragment: 'invite-section'
      });
    });
  }


  contactdr(){
this.router.navigate(['/contact'])
  }
}