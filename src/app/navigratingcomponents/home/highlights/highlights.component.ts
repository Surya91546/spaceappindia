import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent {
  isPlaying = false;
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  playVideo() {
    this.isPlaying = true;

    // Embed YouTube video with autoplay
    const embedUrl = 'https://www.youtube.com/embed/BNudOS8PdCU?autoplay=1';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
