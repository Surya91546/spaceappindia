import { Component, ElementRef, HostListener, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-galleryhome',
  templateUrl: './galleryhome.component.html',
  styleUrls: ['./galleryhome.component.css']
})
export class GalleryhomeComponent implements AfterViewInit {

  currentYear = '24';

  imageSets: any = {
    '16': ['1','2','3','4','5','6','7'],
    '17': ['8','9','10','11','12','13','14'],
    '18': ['15','16','17','18','19','20','21'],
    '19': ['22','23','24','25','26','29','28'],
    '21': ['37', '38', '39', '40', '41', '42', '43'],
    '22': ['44', '45', '46', '47', '48', '49', '50'],
    '23': ['51', '52', '53', '54', '55', '56', '57'],
    '24': ['58', '59', '60', '61', '62', '63', '64'],
    '20': ['30', '31', '32', '33', '34', '35', '36']
  };

  @ViewChildren('imgRef') imgElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.checkInView();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkInView();
  }

  checkInView() {
    this.imgElements.forEach((img: ElementRef) => {
      const rect = img.nativeElement.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        img.nativeElement.classList.add('in-view');
      }
    });
  }

  changeYear(year: string) {
    this.currentYear = year;
    setTimeout(() => this.checkInView(), 100);
  }
}
