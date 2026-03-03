import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaking-to',
  templateUrl: './speaking-to.component.html',
  styleUrls: ['./speaking-to.component.css']
})
export class SpeakingToComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}