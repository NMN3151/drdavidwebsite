import { Component } from '@angular/core';

@Component({
  selector: 'app-for-meeting-professinals',
  templateUrl: './for-meeting-professinals.component.html',
  styleUrls: ['./for-meeting-professinals.component.css']
})
export class ForMeetingProfessinalsComponent {

  downloadFile(path: string, filename: string): void {
    const anchor = document.createElement('a');
    anchor.href = path;
    anchor.download = filename;
    anchor.target = '_blank';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}