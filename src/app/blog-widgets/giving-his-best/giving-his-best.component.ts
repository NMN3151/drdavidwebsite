import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giving-his-best',
  templateUrl: './giving-his-best.component.html',
  styleUrls: ['./giving-his-best.component.css']
})
export class GivingHisBestComponent implements OnInit{
ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

}
