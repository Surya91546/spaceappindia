import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videosboot',
  templateUrl: './videosboot.component.html',
  styleUrls: ['./videosboot.component.css']
})
export class VideosbootComponent {
 activeTab: string = 'details';
  isPlaying = false;

  videoSrc: string = 'https://www.youtube.com/embed/dhYOPzcsbGM?autoplay=1';
  sanitizedVideoSrc!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  playVideo() {
    this.isPlaying = true;
    this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoSrc);
  }
}
