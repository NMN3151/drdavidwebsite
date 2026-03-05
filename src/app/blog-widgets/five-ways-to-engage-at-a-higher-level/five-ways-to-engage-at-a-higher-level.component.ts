import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five-ways-to-engage-at-a-higher-level',
  templateUrl: './five-ways-to-engage-at-a-higher-level.component.html',
  styleUrls: ['./five-ways-to-engage-at-a-higher-level.component.css']
})
export class FiveWaysToEngageAtAHigherLevelComponent implements OnInit{
 ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

}
