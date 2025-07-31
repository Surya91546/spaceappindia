import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videosboot',
  templateUrl: './videosboot.component.html',
  styleUrls: ['./videosboot.component.css']
})
export class VideosbootComponent implements OnInit {
  sanitizedVideoSrc!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const videoId = 'a178LZMdYl4';
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0`;

    this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
