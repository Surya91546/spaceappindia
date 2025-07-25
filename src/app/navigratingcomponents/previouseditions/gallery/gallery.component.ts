import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    { src: '../../../assets/gallery/1.png', class: '' },
    { src: '../../../assets/gallery/2.png', class: '' },
    { src: '../../../assets/gallery/3.png', class: 'tall' },
    { src: '../../../assets/gallery/4.png', class: '' },
    { src: '../../../assets/gallery/5.png', class: '' },
    { src: '../../../assets/gallery/6.png', class: '' },
    { src: '../../../assets/gallery/7.png', class: '' },
    { src: '../../../assets/gallery/8.png', class: '' },
    { src: '../../../assets/gallery/9.png', class: '' }
  ];
}
