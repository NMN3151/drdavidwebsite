import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.inviteForm = this.fb.group({
      name:               ['', [Validators.required]],
      email:              ['', [Validators.required, Validators.email]],
      countryCode:        ['+1', [Validators.required]],
      phone:              ['', [Validators.required]],
      organization:       ['', [Validators.required]],
      eventName:          ['', [Validators.required]],
      eventLocation:      ['', [Validators.required]],
      eventDate:          ['', [Validators.required]],
      expectedAttendance: ['', [Validators.required]],
      hearAbout:          ['', [Validators.required]],
      additionalInfo:     ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.inviteForm.invalid) return;

    this.isLoading = true;

    const formData = {
      ...this.inviteForm.value,
      fullPhone: `${this.inviteForm.value.countryCode} ${this.inviteForm.value.phone}`
    };

    // Simulate async submission
    setTimeout(() => {
      console.log('Invite Dr. Schreiner Form Submitted:', formData);
      this.isLoading = false;
      this.inviteForm.reset({ countryCode: '+1' });
    }, 1500);
  }
}