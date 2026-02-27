import { Component } from '@angular/core';

@Component({
  selector: 'app-acclaimed-keynote',
  templateUrl: './acclaimed-keynote.component.html',
  styleUrls: ['./acclaimed-keynote.component.css']
})
export class AcclaimedKeynoteComponent {

  outcomes: string[] = [
    'Renewed passion for our work',
    'Improved retention and recruitment',
    'Engage in a more meaningful way with the people that matter the most',
  ];
}