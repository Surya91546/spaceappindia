import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
images: string[] = [
    'https://iqac.gitam.edu/assets/images/GITAM-logo.png',
    'https://www.gprec.ac.in/wp-content/uploads/2019/05/gprec_logo1.png',
    '../../../../assets/home/companies/compaines.png',
    '../../../../assets/home/companies/compaines.png',
    '../../../../assets/home/companies/compaines.png',
    '../../../../assets/home/companies/compaines.png',
    '../../../../assets/home/companies/compaines.png',
    '../../../../assets/home/companies/compaines.png',
    '../../../../assets/home/companies/compaines.png',
    
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
