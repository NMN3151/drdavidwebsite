import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gratuity',
  templateUrl: './gratuity.component.html',
  styleUrls: ['./gratuity.component.css']
})
export class GratuityComponent implements OnInit{
ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }
}
