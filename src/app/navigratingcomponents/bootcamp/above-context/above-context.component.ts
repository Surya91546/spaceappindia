import { Component, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-above-context',
  templateUrl: './above-context.component.html',
  styleUrls: ['./above-context.component.css']
})
export class AboveContextComponent {
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
