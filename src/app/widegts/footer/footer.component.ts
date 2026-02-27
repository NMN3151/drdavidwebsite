import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  firstName: string = '';
  email: string = '';

  onSubscribe(): void {
    if (this.firstName && this.email) {
      console.log('Newsletter subscription:', { firstName: this.firstName, email: this.email });
      // Add your subscription logic here (e.g., call a service)
      this.firstName = '';
      this.email = '';
    }
  }
}