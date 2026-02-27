import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

interface VideoItem {
  title: string;
  src: string;
}

@Component({
  selector: 'app-videos-section',
  templateUrl: './videos-section.component.html',
  styleUrls: ['./videos-section.component.css']
})
export class VideosSectionComponent implements AfterViewInit {

  @ViewChild('mainPlayer') mainPlayerRef!: ElementRef<HTMLVideoElement>;

  activeIndex = 0;

  videos: VideoItem[] = [
    {
      title: 'Invest in You',
      src: '../../../assets/videos/Invest-in-you_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Find ways to engage',
      src: '../../../assets/videos/Find-ways-to-engage_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'What is Engagement?',
      src: '../../../assets/videos/What-is-engagement-_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'What is Appreciative Inquiry?',
      src: '../../../assets/videos/What-is-Appreciative-Inquiry-_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'The Best Part of Their Day',
      src: '../../../assets/videos/The-best-part-of-their-day_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Three Best Practices for Engagement',
      src: '../../../assets/videos/Three-Best-Practices-for-Engagement_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Ask great questions',
      src: '../../../assets/videos/Ask-great-questions_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Gratitude',
      src: '../../../assets/videos/Gratitude_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Listening',
      src: '../../../assets/videos/Listening_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Transparency',
      src: '../../../assets/videos/Transparency_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Various Mediums',
      src: '../../../assets/videos/Various-Mediums_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Low- and High-Profile Interactions',
      src: '../../../assets/videos/Low-and-High-Profile-Interactions_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Know your Audience',
      src: '../../../assets/videos/Know-your-Audience_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Volunteer',
      src: '../../../assets/videos/Volunteer_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'High Performers',
      src: '../../../assets/videos/High-Performers_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Close',
      src: '../../../assets/videos/Close_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Team',
      src: '../../../assets/videos/Team_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Engagement / Executive Presence',
      src: '../../../assets/videos/Engagement-Executive-Presence_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Leading with Love',
      src: '../../../assets/videos/Leading-with-Love_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Connection with Employees',
      src: '../../../assets/videos/Connection-with-Employees_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
    {
      title: 'Valuing Team Members',
      src: '../../../assets/videos/Valuing-Team-Members_YouTube-1080p-Full-HD_Twitter-720p-HD.mp4'
    },
  ];

  get activeVideo(): VideoItem {
    return this.videos[this.activeIndex];
  }

  ngAfterViewInit(): void {
    // Load first video
    this.loadMainVideo();
  }

  selectVideo(index: number): void {
    this.activeIndex = index;
    setTimeout(() => {
      this.loadMainVideo();
    }, 0);
  }

  loadMainVideo(): void {
    const player = this.mainPlayerRef?.nativeElement;
    if (player) {
      player.load();
      player.play().catch(() => {
        // Autoplay blocked by browser - user interaction required
      });
    }
  }

  onVideoEnded(): void {
    // Auto-advance to next video
    if (this.activeIndex < this.videos.length - 1) {
      this.selectVideo(this.activeIndex + 1);
    }
  }
}