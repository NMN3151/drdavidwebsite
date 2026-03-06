import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth'});

    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName:  ['', Validators.required],
      email:     ['', [Validators.required, Validators.email]],
      message:   ['', Validators.required]
    });
  }

  // Returns true if the field is invalid AND has been touched
  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched || this.submitted));
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Add your submit logic here (e.g. API call)
      this.contactForm.reset();
      this.submitted = false;
    }
  }

  goToMeetingRequest(): void {
    this.router.navigate(['/home/meeting-request']);
  }
}