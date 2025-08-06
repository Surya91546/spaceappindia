import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // <-- Add this

@Component({
  selector: 'app-infographics',
  templateUrl: './infographics.component.html',
  styleUrls: ['./infographics.component.css']
})
export class InfographicsComponent implements OnInit {
  isSmallScreen = false;

  constructor(private router: Router) {} // <-- Inject Router

  cards = [
    { year: '2016', route: '/participants/2016' },
    { year: '2017', route: '/participants/2017' },
    { year: '2018', route: '/participants/2018' },
    { year: '2019', route: '/participants/2019' },
    { year: '2020', route: '/participants/2020' },
    { year: '2021', route: '/participants/2021' },
    { year: '2022', route: '/participants/2022' },
    { year: '2023', route: '/participants/2023' },
    { year: '2024', route: '/participants/2024' }
  ];

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 768;
  }

  openPDF(route: string) {
    this.router.navigateByUrl(route); // <-- Navigate using Router
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
