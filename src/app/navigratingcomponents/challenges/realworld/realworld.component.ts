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
        'assets/skyroot1.jpg',
        'assets/skyroot2.jpg',
        'assets/skyroot3.jpg',
        'assets/skyroot4.jpg'
      ]
    },
    {
      title: 'Space Apps @Microsoft',
      description: 'An exclusive session with Microsoft mentors to explore space app challenges.',
      images: [
        'assets/microsoft1.jpg',
        'assets/microsoft2.jpg',
        'assets/microsoft3.jpg',
        'assets/microsoft4.jpg'
      ]
    },
    {
      title: 'T-hub Visit',
      description: 'A tour into India’s largest innovation hub connecting startups.',
      images: [
        'assets/thub1.jpg',
        'assets/thub2.jpg',
        'assets/thub3.jpg',
        'assets/thub4.jpg'
      ]
    },
    {
      title: 'We-Hub Bootcamp',
      description: 'Bootcamp at We-Hub promoting women-led innovation.',
      images: [
        'assets/wehub1.jpg',
        'assets/wehub2.jpg',
        'assets/wehub3.jpg',
        'assets/wehub4.jpg'
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
