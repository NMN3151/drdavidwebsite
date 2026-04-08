import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface Country {
  name: string;
  code: string;
  dial_code: string;
  flag: string;
}

@Component({
  selector: 'app-invite-drschreiner-to-speak',
  templateUrl: './invite-drschreiner-to-speak.component.html',
  styleUrls: ['./invite-drschreiner-to-speak.component.css']
})
export class InviteDrschreinerToSpeakComponent implements OnInit {

  inviteForm!: FormGroup;
  isLoading = false;

  countries: Country[] = [
    { name: 'United States', code: 'US', dial_code: '+1', flag: '🇺🇸' },
    { name: 'United Kingdom', code: 'GB', dial_code: '+44', flag: '🇬🇧' },
    { name: 'Canada', code: 'CA', dial_code: '+1', flag: '🇨🇦' },
    { name: 'Australia', code: 'AU', dial_code: '+61', flag: '🇦🇺' },
    { name: 'Germany', code: 'DE', dial_code: '+49', flag: '🇩🇪' },
    { name: 'France', code: 'FR', dial_code: '+33', flag: '🇫🇷' },
    { name: 'India', code: 'IN', dial_code: '+91', flag: '🇮🇳' },
    { name: 'Japan', code: 'JP', dial_code: '+81', flag: '🇯🇵' },
    { name: 'Brazil', code: 'BR', dial_code: '+55', flag: '🇧🇷' },
    { name: 'Mexico', code: 'MX', dial_code: '+52', flag: '🇲🇽' },
    { name: 'South Africa', code: 'ZA', dial_code: '+27', flag: '🇿🇦' },
    { name: 'Nigeria', code: 'NG', dial_code: '+234', flag: '🇳🇬' },
    { name: 'Singapore', code: 'SG', dial_code: '+65', flag: '🇸🇬' },
    { name: 'New Zealand', code: 'NZ', dial_code: '+64', flag: '🇳🇿' },
    { name: 'UAE', code: 'AE', dial_code: '+971', flag: '🇦🇪' },
    { name: 'Sri Lanka', code: 'LK', dial_code: '+94', flag: '🇱🇰' },
    { name: 'Pakistan', code: 'PK', dial_code: '+92', flag: '🇵🇰' },
    { name: 'China', code: 'CN', dial_code: '+86', flag: '🇨🇳' },
    { name: 'Italy', code: 'IT', dial_code: '+39', flag: '🇮🇹' },
    { name: 'Spain', code: 'ES', dial_code: '+34', flag: '🇪🇸' },
  ];

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute


  ) {}

  ngOnInit(): void {
    this.inviteForm = this.fb.group({
      name:               ['', [Validators.required]],
      email:              ['', [Validators.required, Validators.email]],
      countryCode:        ['+1'],
      phone:              [''],
      organization:       [''],
      eventName:          [''],
      eventLocation:      [''],
      eventDate:          [''],
      expectedAttendance: [''],
      hearAbout:          [''],
      additionalInfo:     [''],
    });


    this.activatedRoute.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    });



  }

  onSubmit(): void {

  if (this.inviteForm.invalid) return;

  this.isLoading = true;

  const formData = {
  access_key: "c4ede7c2-9615-4a2b-8a42-db0f89471f69",

  subject: "New Dr Schreiner Speaking Invitation",
  from_name: "Dr Schreiner Website",

  "Name": this.inviteForm.value.name,
  "Email": this.inviteForm.value.email,
  "Phone": `${this.inviteForm.value.countryCode} ${this.inviteForm.value.phone}`,
  "Organization": this.inviteForm.value.organization,
  "Event Name": this.inviteForm.value.eventName,
  "Event Location": this.inviteForm.value.eventLocation,
  "Event Date": this.inviteForm.value.eventDate,
  "Expected Attendance": this.inviteForm.value.expectedAttendance,
  "How Did You Hear About Dr. Schreiner?": this.inviteForm.value.hearAbout,
  "Additional Information": this.inviteForm.value.additionalInfo
};

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(async (response) => {
    const result = await response.json();

    if (result.success) {
      alert("Form submitted successfully!");
      this.inviteForm.reset({ countryCode: '+1' });
    } else {
      alert("Something went wrong.");
      console.log(result);
    }

    this.isLoading = false;
  })
  .catch(error => {
    console.log(error);
    this.isLoading = false;
  });

}
}