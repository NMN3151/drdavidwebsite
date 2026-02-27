import { Component } from '@angular/core';

@Component({
  selector: 'app-for-meeting-professinals',
  templateUrl: './for-meeting-professinals.component.html',
  styleUrls: ['./for-meeting-professinals.component.css']
})
export class ForMeetingProfessinalsComponent {

  downloadLinks = [
    { label: 'Download Headshot',               href: '#' },
    { label: 'Download Bio',                    href: '#' },
    { label: 'Download Intro',                  href: '#' },
    { label: 'Download One Sheet',              href: '#' },
    { label: 'Download Speaker Kit',            href: '#' },
    { label: 'Download AV Needs',               href: '#' },
    { label: 'Download Leadership Tree Template', href: '#' },
  ];
}