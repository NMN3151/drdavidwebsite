import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meeting-request',
  templateUrl: './meeting-request.component.html',
  styleUrls: ['./meeting-request.component.css']
})
export class MeetingRequestComponent implements OnInit {

  meetingForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth'});

    this.meetingForm = this.fb.group({
      firstName:   ['', Validators.required],
      lastName:    ['', Validators.required],
      email:       ['', [Validators.required, Validators.email]],
      meetingType: ['30min-zoom', Validators.required]
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.meetingForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched || this.submitted));
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.meetingForm.valid) {
      console.log('Meeting request submitted:', this.meetingForm.value);
      // Add your submit logic here (e.g. API call)
      this.meetingForm.reset({ meetingType: '30min-zoom' });
      this.submitted = false;
    }
  }
}