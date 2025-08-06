import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  images: string[] = [
    '../../../assets/companies/1.jpeg',
    '../../../assets/companies/2.jpg',
    '../../../assets/companies/4.png',
    '../../../assets/companies/5.webp',
    '../../../assets/companies/6.jpeg',
    '../../../assets/companies/7.jpg',
    '../../../assets/companies/8.png',
    '../../../assets/companies/8.png',
    
  ];

  imageRows: string[][] = [];

  ngOnInit() {
    this.splitIntoRows();
  }

  splitIntoRows() {
    for (let i = 0; i < this.images.length; i += 3) {
      this.imageRows.push(this.images.slice(i, i + 3));
    }
  }
}
