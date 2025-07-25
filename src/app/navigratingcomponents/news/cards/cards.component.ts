import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards = [
    {
      title: 'Carlo',
      location: 'PALA',
      date: '25-6-25',
      image: 'https://cdn.pixabay.com/photo/2015/02/28/23/35/les-invalides-654116_1280.jpg',
      description: `In this 10th edition, the auroras are more than just beautiful 
      lights in the sky; they’re warnings. Wherever they glow, new challenges follow.`
    },
    {
      title: 'Alpha',
      location: 'PALA',
      date: '25-6-25',
      image: 'https://cdn.pixabay.com/photo/2015/02/28/23/35/les-invalides-654116_1280.jpg',
      description: `In this 10th edition, the auroras are more than just beautiful 
      lights in the sky; they’re warnings. Wherever they glow, new challenges follow.`
    },
    {
      title: 'Edged',
      location: 'PALA',
      date: '25-6-25',
      image: 'https://cdn.pixabay.com/photo/2015/02/28/23/35/les-invalides-654116_1280.jpg',
      description: `In this 10th edition, the auroras are more than just beautiful 
      lights in the sky; they’re warnings. Wherever they glow, new challenges follow.`
    }
  ];
}
