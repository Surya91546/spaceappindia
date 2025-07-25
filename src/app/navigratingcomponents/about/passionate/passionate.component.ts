import { Component } from '@angular/core';

@Component({
  selector: 'app-passionate',
  templateUrl: './passionate.component.html',
  styleUrls: ['./passionate.component.css']
})
export class PassionateComponent {
  posters = [
    { src: '../../../../assets/about/1.png', title: 'Participants' },
    { src: '../../../../assets/about/2.png', title: 'Mentors' },
    { src: '../../../../assets/about/3.png', title: 'Judges' },
    { src: '../../../../assets/about/4.png', title: 'Volunteer' },
  ];
}
