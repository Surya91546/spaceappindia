import { Component } from '@angular/core';

@Component({
  selector: 'app-infographics',
  templateUrl: './infographics.component.html',
  styleUrls: ['./infographics.component.css']
})
export class InfographicsComponent {
  cards = [
    { year: '2016', link: 'assets/reports/2016.pdf' },
    { year: '2017', link: 'assets/reports/2017.pdf' },
    { year: '2018', link: 'assets/reports/2018.pdf' },
    { year: '2019', link: 'assets/reports/2019.pdf' },
    { year: '2020', link: 'assets/reports/2020.pdf' },
    { year: '2021', link: 'assets/reports/2021.pdf' },
    { year: '2022', link: 'assets/reports/2022.pdf' },
    { year: '2023', link: 'assets/reports/2023.pdf' },
    { year: '2024', link: 'assets/reports/2024.pdf' }
  ];

  openPDF(link: string) {
    window.open(link, '_blank');
  }

  getCardTransform(index: number, total: number): string {
    const radius = 220; // Adjust this for a bigger or smaller circle
    const angleStep = 360 / total;
    const gap = 5; // Degree gap between cards
    const adjustedAngleStep = angleStep - (gap / total);
    const angle = index * adjustedAngleStep - 90;

    const rad = angle * (Math.PI / 180);
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);

    return `translate(${x}px, ${y}px)`; // Cards stay upright
  }
}
