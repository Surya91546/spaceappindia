import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-infographics',
  templateUrl: './infographics.component.html',
  styleUrls: ['./infographics.component.css']
})
export class InfographicsComponent implements OnInit {
  isSmallScreen = false;

  cards = [
    { year: '2016', link: '../../../assets/INFOGRAPH/SPACEAPPS_2016_INFOGRAPHIC_P╞Æ (1).pdf' },
    { year: '2017', link: '../../../assets/INFOGRAPH/spaceapps-acceleratortoolkit final.pdf' },
    { year: '2018', link: '../../../assets/INFOGRAPH/NASA_Infographic_2018.pdf' },
    { year: '2019', link: '../../../assets/INFOGRAPH/SPACEAPPS_2019_THENUMBERS_╞Æ (1).pdf' },
    { year: '2020', link: '../../../assets/INFOGRAPH/NASA_Space_Apps_2020_Infographic_Final-2.pdf' },
    { year: '2021', link: '../../../assets/INFOGRAPH/2021_Space_Apps_by_the_Numbers.pdf' },
    { year: '2022', link: '../../../assets/INFOGRAPH/2022_Space_Apps_Infographic_FINAL-2.pdf' },
    { year: '2023', link: '../../../assets/INFOGRAPH/2023_NASA_International_Space_Apps_Challenge_Infographic_Final.pdf' },
    { year: '2024', link: '../../../assets/INFOGRAPH/2024_NASA_International_Space_Apps_Challenge_.width-1024-2.png' }
  ];

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 768;
  }

  openPDF(link: string) {
    window.open(link, '_blank');
  }

  getCardTransform(index: number, total: number): string {
    if (this.isSmallScreen) return 'none';

    const radius = 220;
    const angleStep = 360 / total;
    const gap = 5;
    const adjustedAngleStep = angleStep - (gap / total);
    const angle = index * adjustedAngleStep - 90;

    const rad = angle * (Math.PI / 180);
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);

    return `translate(${x}px, ${y}px)`;
  }
}
