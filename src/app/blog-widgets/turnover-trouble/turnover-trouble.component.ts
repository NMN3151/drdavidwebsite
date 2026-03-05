import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turnover-trouble',
  templateUrl: './turnover-trouble.component.html',
  styleUrls: ['./turnover-trouble.component.css']
})
export class TurnoverTroubleComponent implements OnInit{
ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

}
