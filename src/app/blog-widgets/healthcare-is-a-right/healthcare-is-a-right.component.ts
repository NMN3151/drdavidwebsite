import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthcare-is-a-right',
  templateUrl: './healthcare-is-a-right.component.html',
  styleUrls: ['./healthcare-is-a-right.component.css']
})
export class HealthcareIsARightComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

}
