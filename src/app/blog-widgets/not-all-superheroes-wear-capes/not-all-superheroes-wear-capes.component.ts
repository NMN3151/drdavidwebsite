import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-all-superheroes-wear-capes',
  templateUrl: './not-all-superheroes-wear-capes.component.html',
  styleUrls: ['./not-all-superheroes-wear-capes.component.css']
})
export class NotAllSuperheroesWearCapesComponent implements OnInit{
ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

}
