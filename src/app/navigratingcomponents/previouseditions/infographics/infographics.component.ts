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
    { year: '2020', link: 'assets/reports/2020.pdf' }
  ];

  openPDF(link: string) {
    window.open(link, '_blank');
  }

  getCardTransform(index: number, total: number): string {
    const angleStep = 60 / (total - 1); // degrees between cards
    const angle = -30 + index * angleStep; // spread from -30 to +30 degrees
    const radius = 150; // px distance from center

    // Convert angle to radians for math
    const radians = angle * (Math.PI / 180);
    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);

    return `translate(${x}px, ${y}px) rotate(${angle}deg)`;
  }
}
