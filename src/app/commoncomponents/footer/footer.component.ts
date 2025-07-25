import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  links = [
    {
      title: 'Home',
      items: ['About', 'Our Heros', 'Moments', 'Roadmap', 'Videos']
    },
    {
      title: 'About',
      items: ['Our team', 'Our values', 'Blog']
    },
    {
      title: 'Editions',
      items: ['2023', '2022', '2021']
    }
  ];

  socialIcons = [
    { iconClass: 'fab fa-discord', url: 'https://discord.com' },
    { iconClass: 'fab fa-twitter', url: 'https://twitter.com' }
  ];
}
