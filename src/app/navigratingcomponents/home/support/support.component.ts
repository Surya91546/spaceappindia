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
    'https://www.mahindrauniversity.edu.in/wp-content/uploads/2023/03/mulogo.webp',
    'https://tse3.mm.bing.net/th/id/OIP.e5_ETjMtD0P1pdeBgoFnAQHaCe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://cdn.freelogovectors.net/wp-content/uploads/2022/03/chandigarh_university_logo_cu_freelogovectors.net_.png',
    'https://tse3.mm.bing.net/th/id/OIP.JBgo1byi8Xh934mOHL4HmQHaCe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://site.ieee.org/sb-bvcoend/files/2018/09/Logo-PNG-1-1024x254.png',
    'https://th.bing.com/th/id/R.6b535b1c21db325cb2bc0cfc3b8c8eee?rik=78LPPKY6J5vi3A&riu=http%3a%2f%2fcollege4u.in%2fwp-content%2fuploads%2f2018%2f04%2fDAU.png&ehk=4sn9kI4XxBcsIlkV92GyUyoD5yOJeULwxmFUHv55CuM%3d&risl=&pid=ImgRaw&r=0',
    '../../../assets/iHub-Loog-green 1.png'
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
