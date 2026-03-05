import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leading-with-love',
  templateUrl: './leading-with-love.component.html',
  styleUrls: ['./leading-with-love.component.css']
})
export class LeadingWithLoveComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

}
