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
    '19': ['64','65','66','67','68','69','70'],
    '21': ['1', '2', '3', '4', '5', '6', '8'],
    '22': ['9', '10', '11', '12', '13', '14', '15'],
    '23': ['17', '18', '19', '20', '21', '22', '23'],
    '24': ['25', '26', '27', '28', '29', '30', '31'],
    '20': ['34', '35', '36', '37', '38', '39', '40']
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
