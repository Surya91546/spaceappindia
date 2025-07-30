import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  articles: { title: string; subtitle: string; image: string }[] = [];
  currentIndex = 0;

  ngOnInit(): void {
    const mediaFolder = '../../../assets/MEDIA/';
    const imageFiles = [
      '41930084_2302909169723519_3812949640425242624_n.jpg',
      '42044833_2302909213056848_3929868867949559808_n.jpg',
      '289843111_5282384198515481_5248834093520066423_n.jpeg',
      '290217842_5282384215182146_8654921925508216146_n.jpeg',
      '463894197_8375941632528496_3976230395744115716_n.png',
      '463901544_8375941452528514_981584623677844227_n.png',
      '464284519_8604885872920406_5916517233592359317_n.jpg',
      '502546992_9916475365141774_409875162079010609_n.jpg',
      '508457382_9916475571808420_9218740699108495504_n.jpg',
      '508682241_9916475411808436_6543752408311227131_n.jpg',
      '509409418_9916475595141751_7531742426288507333_n.jpg',
      'Media 1.jpeg',
      'media 2.jpeg',
      'media 3.jpeg',
      'media 4.jpeg',
      'media 5.jpeg',
      'media 6.jpeg',
      'media 12.jpeg',
      'media 18.jpeg',
      'media 19.jpeg',
      'media 20.jpeg',
      'media 21.jpeg',
      'media 22.jpeg',
      'media 23.jpeg',
      'media 24.jpeg',
      'media 25.jpeg',
      'media 26.jpeg',
      'media 27.jpeg',
      'media 28.jpeg',
      'media 29.jpeg',
      'media 30.jpeg',
      'media 31.jpeg',
      'WhatsApp Image 2022-04-22 at 3.32.55 PM.jpeg',
      'WhatsApp Image 2022-04-22 at 3.32.57 PM-2.jpeg',
      'WhatsApp Image 2022-04-22 at 3.32.57 PM.jpeg',
      'WhatsApp Image 2022-06-18 at 7.35.01 AM.jpeg',
      'WhatsApp Image 2022-06-19 at 3.54.25 PM.jpeg',
      'WhatsApp Image 2022-08-02 at 11.01.05 AM.jpeg',
      'WhatsApp Image 2022-08-02 at 11.01.11 AM.jpeg',
      'WhatsApp Image 2022-08-02 at 12.05.00 PM.jpeg',
      'WhatsApp Image 2022-08-03 at 3.41.34 PM-2.jpeg',
      'WhatsApp Image 2022-08-03 at 3.41.34 PM.jpeg',
      'WhatsApp Image 2022-08-07 at 10.26.33 AM.jpeg',
      'WhatsApp Image 2022-11-06 at 08.03.48-2.jpeg',
      'WhatsApp Image 2022-11-06 at 08.03.48-3.jpeg',
      'WhatsApp Image 2022-11-06 at 08.03.48.jpeg',
      'WhatsApp Image 2022-11-06 at 08.03.49.jpeg',
      'WhatsApp Image 2023-10-18 at 10.16.23 (1).jpeg',
      'WhatsApp Image 2023-10-18 at 10.16.23.jpeg',
      'WhatsApp Image 2023-10-20 at 20.11.23.jpeg',
      'WhatsApp Image 2023-10-24 at 12.44.13.jpeg'
 
    
    ];

    this.articles = imageFiles.map((file) => ({
      title: this.extractTitle(file),
      subtitle: 'The Indian Express',
      image: `${mediaFolder}${file}`
    }));
  }

  extractTitle(fileName: string): string {
    return fileName
      .replace(/\.[^/.]+$/, '') // Remove extension
      .replace(/[-_]/g, ' ')    // Replace hyphens/underscores
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize words
  }

  prevArticle() {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  nextArticle() {
    if (this.currentIndex < this.articles.length - 1) this.currentIndex++;
  }
}
