import { Component } from '@angular/core';

@Component({
  selector: 'app-realworld',
  templateUrl: './realworld.component.html',
  styleUrls: ['./realworld.component.css']
})
export class RealworldComponent {
  selectedIndex = 0;
  selectedImageIndex = 0;

  visits = [
    {
      title: 'SkyRoot Visit',
      description: 'Our industrial visits connect participants with leading organizations in the space sector.',
      images: [
        '../../../assets/skyrootvisit/WhatsApp Image 2024-07-12 at 16.17.04.jpeg',
        '../../../assets/skyrootvisit/WhatsApp Image 2024-07-12 at 16.17.04-2.jpeg',
        '../../../assets/skyrootvisit/WhatsApp Image 2024-07-12 at 16.17.04 2.png',
        '../../../assets/skyrootvisit/WhatsApp Image 2024-07-12 at 16.17.04 2 (2).png'
      ]
    },
    {
      title: 'Space Apps @Microsoft',
      description: 'An exclusive session with Microsoft mentors to explore space app challenges.',
      images: [
        '../../../assets/skyrootvisit/mc1.png',
        '../../../assets/skyrootvisit/mc2.png',
        '../../../assets/skyrootvisit/mc3.png',
        '../../../assets/skyrootvisit/mc4.png'
      ]
    },
    {
      title: 'T-hub Visit',
      description: 'A tour into India’s largest innovation hub connecting startups.',
      images: [
         '../../../assets/skyrootvisit/thub1.png',
        '../../../assets/skyrootvisit/thub2.png',
        '../../../assets/skyrootvisit/thub3.png',
        '../../../assets/skyrootvisit/thub4.png'
      ]
    },
    {
      title: 'We-Hub Bootcamp',
      description: 'Bootcamp at We-Hub promoting women-led innovation.',
      images: [
        '../../../assets/skyrootvisit/we.png',
        '../../../assets/skyrootvisit/we1.png',
        '../../../assets/skyrootvisit/we2.png',
        '../../../assets/skyrootvisit/we3.png'
      ]
    }
  ];

  selectVisit(index: number) {
    this.selectedIndex = index;
    this.selectedImageIndex = 0;
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  isSelected(index: number): boolean {
    return this.selectedIndex === index;
  }
}
