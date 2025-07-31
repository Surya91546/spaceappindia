import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent {
  videos: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {
    const links = [
      'https://www.youtube.com/watch?v=BNudOS8PdCU',
      'https://www.youtube.com/watch?v=PY72GcdnydQ',
      'https://www.youtube.com/watch?v=r8c5LsYsxlg',
      'https://www.youtube.com/watch?v=lItgfaEub4U',
      'https://www.youtube.com/watch?v=zwKeBJUrCzw',
      'https://www.youtube.com/watch?v=7Rhkhs0o7uw',
      'https://www.youtube.com/watch?v=CLK2681iC1k',
      'https://www.youtube.com/watch?v=qy3h4VC9b3c',
      'https://www.youtube.com/watch?v=wjxesnxGGr4',
      'https://www.youtube.com/watch?v=IRU5FOMk2dw',
      'https://www.youtube.com/watch?v=wczcP5IUh8E',
      'https://www.youtube.com/watch?v=6F0EOc2ixoI',
      'https://www.youtube.com/watch?v=Zve59Opckus',
      'https://www.youtube.com/watch?v=kkZ8tpF7nMg',
      'https://www.youtube.com/watch?v=xWbvv9Hej7o',
      'https://www.youtube.com/watch?v=a178LZMdYl4',
      'https://www.youtube.com/watch?v=ZteqdrZV_AY',
      'https://www.youtube.com/watch?v=CLK2681iC1k&t=379s',
      'https://www.youtube.com/watch?v=x-TDCcky7uM',
      'https://www.youtube.com/watch?v=IZ04kNhUxA8',
      'https://www.youtube.com/watch?v=WiRXb7-2bTM',
      'https://www.youtube.com/watch?v=lItgfaEub4U&authuser=1',
      'https://www.youtube.com/watch?v=zwKeBJUrCzw&t=67s&authuser=1',
      'https://www.youtube.com/watch?v=6F0EOc2ixoI&t=1413s&authuser=1',
      'https://www.youtube.com/watch?v=kkZ8tpF7nMg&t=621s&authuser=1',
      'https://www.youtube.com/watch?v=xWbvv9Hej7o',
      'https://www.youtube.com/watch?v=a178LZMdYl4&authuser=1',
      'https://www.youtube.com/watch?v=xQ3CTfjqg2g&authuser=1',
      'https://www.youtube.com/watch?v=ZteqdrZV_AY',
      'https://www.youtube.com/watch?v=xQ3CTfjqg2g'
    ];

    this.videos = links.map(link => {
      const id = this.getVideoId(link);
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&rel=0`
      );
    });
  }

  getVideoId(url: string): string {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : '';
  }
}
