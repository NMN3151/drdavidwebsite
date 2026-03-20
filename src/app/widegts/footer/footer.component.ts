import { HttpClient } from '@angular/common/http';
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


  constructor(private http: HttpClient) {}


  
  onSubscribe(form: NgForm): void {

 

    const formData = {
      access_key: '7c46215e-c935-46f9-9623-8e0346b86f8b',
      name: this.firstName,
      email: this.email,
      subject: 'New Newsletter Subscription'
    };

    this.http.post('https://api.web3forms.com/submit', formData)
      .subscribe({
        next: (response) => {
          console.log('Subscription successful', response);
          alert('Thank you for subscribing!');
          form.reset();
        },
        error: (error) => {
          console.error('Submission error', error);
          alert('Something went wrong. Please try again.');
        }
      });

  }
}