import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up-become-the-best',
  templateUrl: './pop-up-become-the-best.component.html',
  styleUrls: ['./pop-up-become-the-best.component.css']
})
export class PopUpBecomeTheBestComponent implements OnInit {

  isVisible = true;

  // Static so it persists across SPA navigation but resets on full page refresh
  private static hasBeenClosed = false;

  ngOnInit(): void {
    if (!PopUpBecomeTheBestComponent.hasBeenClosed) {
      setTimeout(() => {
        this.isVisible = true;
      }, 800);
    }
  }

  closePopup(): void {
    this.isVisible = false;
    PopUpBecomeTheBestComponent.hasBeenClosed = true;
  }

  navigateToSpeaking(): void {
    this.closePopup();
    window.open('https://mailchi.mp/drdavidschreiner/op7lqxugxr', '_blank');
  }
}
