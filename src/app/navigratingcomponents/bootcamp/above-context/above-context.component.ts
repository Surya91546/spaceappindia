import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-above-context',
  templateUrl: './above-context.component.html',
  styleUrls: ['./above-context.component.css']
})
export class AboveContextComponent {
  activeTab: string = 'details';
  searchTerm = '';
  videoId: string = 'r8c5LsYsxlg';
  videoSrc: string = `https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=1&loop=1&playlist=${this.videoId}&controls=0&rel=0`;

  sanitizedVideoSrc!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoSrc);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  cards = [
    { title: '91 Springboard', file: '../../../assets/REPORTS/91%20Springboard.pdf' },
    { title: '91 Springboard_2', file: '../../../assets/REPORTS/91%20Springboard_2.pdf' },
    { title: 'ACE ENGINEERING COLLEGE', file: '../../../assets/REPORTS/ACE%20ENGINEERING%20COLLEGE.pdf' },
    { title: 'Aditya Engineering College', file: '../../../assets/REPORTS/Aditya%20Engineering%20College.pdf' },
    { title: 'B V Raju Institute Of Technology', file: '../../../assets/REPORTS/B%20V%20Raju%20Institute%20Of%20Technology.pdf' },
    { title: 'BHARATI VIDYAPEETH COLLEGE OF ENGINEERING', file: '../../../assets/REPORTS/BHARATI%20VIDYAPEETH%20COLLEGE%20OF%20ENGINEERING.pdf' },
    { title: 'Collaboration AIC-DSU & SUMVN', file: '../../../assets/REPORTS/Collaboration%20AIC-DSU%20&%20SUMVN.pdf' },
    { title: 'DREAM INSTITUTE OF TECHNOLOGY', file: '../../../assets/REPORTS/DREAM%20INSTITUTE%20OF%20TECHNOLOGY.pdf' },
    { title: 'G. Narayanamma Institute of Technology and Science', file: '../../../assets/REPORTS/G.%20Narayanamma%20Institute%20of%20Technology%20and%20Science.pdf' },
    { title: 'G. Narayanamma Institute of Technology and Science_2', file: '../../../assets/REPORTS/G.%20Narayanamma%20Institute%20of%20Technology%20and%20Science_2.pdf' },
    { title: 'G. Narayanamma Institute of Technology and Science_3', file: '../../../assets/REPORTS/G.%20Narayanamma%20Institute%20of%20Technology%20and%20Science_3.pdf' },
    { title: 'GALGOTIAS UNIVERSITY', file: '../../../assets/REPORTS/GALGOTIAS%20UNIVERSITY.pdf' },
    { title: 'Gitam', file: '../../../assets/REPORTS/Gitam.pdf' },
    { title: 'GURU NANAK INSTITUTE OF TECHNOLOGY', file: '../../../assets/REPORTS/GURU%20NANAK%20INSTITUTE%20OF%20TECHNOLOGY.pdf' },
    { title: 'HERITAGE INSTITUTE OF TECHNOLOGY', file: '../../../assets/REPORTS/HERITAGE%20INSTITUTE%20OF%20TECHNOLOGY.pdf' },
    { title: 'INSTITUTE OF AERONAUTICAL ENGINEERING', file: '../../../assets/REPORTS/INSTITUTE%20OF%20AERONAUTICAL%20ENGINEERING.pdf' },
    { title: 'Jagan Institute of Management Studies, Jaipur', file: '../../../assets/REPORTS/Jagan%20Institute%20of%20Management%20Studies,%20Jaipur.pdf' },
    { title: 'JAGAN INSTITUTE OF MANAGEMENT STUDIES', file: '../../../assets/REPORTS/JAGAN%20INSTITUTE%20OF%20MANAGEMENT%20STUDIES.pdf' },
    { title: 'Jaipur Engineering college and Research Centre', file: '../../../assets/REPORTS/Jaipur%20Engineering%20college%20and%20Research%20Centre.pdf' },
    { title: 'JOGINPALLY B.R. ENGINEERING COLLEGE', file: '../../../assets/REPORTS/JOGINPALLY%20B.R.%20ENGINEERING%20COLLEGE.pdf' },
    { title: 'KAKATIYA INSTITUTE OF TECHNOLOGY & SCIENCE', file: '../../../assets/REPORTS/KAKATIYA%20INSTITUTE%20OF%20TECHNOLOGY%20&%20SCIENCE.pdf' },
    { title: 'KALINGA INSTITUTE Of TECHNOLOGY', file: '../../../assets/REPORTS/KALINGA%20INSTITUTE%20Of%20TECHNOLOGY.pdf' },
    { title: 'KALINGA INSTITUTE Of TECHNOLOGY_2', file: '../../../assets/REPORTS/KALINGA%20INSTITUTE%20Of%20TECHNOLOGY_2.pdf' },
    { title: 'Koneru lakshmaiah deemed to be University', file: '../../../assets/REPORTS/Koneru%20lakshmaiah%20deemed%20to%20be%20University.pdf' },
    { title: 'letter Vr - 1.docx', file: '../../../assets/REPORTS/letter%20Vr%20-%201.docx' },
    { title: 'Letter', file: '../../../assets/REPORTS/Letter.pdf' },
    { title: 'Methodist College of Engineering and Technology', file: '../../../assets/REPORTS/Methodist%20College%20of%20Engineering%20and%20Technology.pdf' },
    { title: 'MLR Institute of Technology', file: '../../../assets/REPORTS/MLR%20Institute%20of%20Technology.pdf' },
    { title: 'Narula Institute of Technology', file: '../../../assets/REPORTS/Narula%20Institute%20of%20Technology.pdf' },
    { title: 'National Institute of Technology', file: '../../../assets/REPORTS/National%20Institute%20of%20Technology.pdf' },
    { title: 'PALLAVI ENGINEERING COLEEGE', file: '../../../assets/REPORTS/PALLAVI%20ENGINEERING%20COLEEGE.pdf' },
    { title: 'RGM COLLEGE OF ENGINEERING AND TECHNOLOGY', file: '../../../assets/REPORTS/RGM%20COLLEGE%20OF%20ENGINEERING%20AND%20TECHNOLOGY.pdf' },
    { title: 'RGM COLLEGE OF ENGINEERING AND TECHNOLOGY_2', file: '../../../assets/REPORTS/RGM%20COLLEGE%20OF%20ENGINEERING%20AND%20TECHNOLOGY_2.pdf' },
    { title: 'Saraswati College of Engineering.', file: '../../../assets/REPORTS/Saraswati%20College%20of%20Engineering.pdf' },
    { title: 'Sir M. Visvesvaraya Institute of Technology', file: '../../../assets/REPORTS/Sir%20M.%20Visvesvaraya%20Institute%20of%20Technology.pdf' },
    { title: 'Sir M. Visvesvaraya Institute of Technology_2', file: '../../../assets/REPORTS/Sir%20M.%20Visvesvaraya%20Institute%20of%20Technology_2.pdf' },
    { title: 'Space Apps Final Report 2020', file: '../../../assets/REPORTS/Space%20Apps%20Final%20Report%202020.pdf' },
    { title: 'Space Apps Final Report 2021', file: '../../../assets/REPORTS/Space%20Apps%20Final%20Report%202021.pdf' },
    { title: 'Space Apps Final Report 2022', file: '../../../assets/REPORTS/Space%20Apps%20Final%20Report%202022.pdf' },
    { title: 'THAKUR COLLEGE OF ENGINEERING & TECHNOLOGY', file: '../../../assets/REPORTS/THAKUR%20COLLEGE%20OF%20ENGINEERING%20&%20TECHNOLOGY.pdf' },
    { title: 'VAAGDEVI COLLEGE OF ENGINEERING', file: '../../../assets/REPORTS/VAAGDEVI%20COLLEGE%20OF%20ENGINEERING.pdf' },
    { title: 'Vishnu Foundation TBI', file: '../../../assets/REPORTS/Vishnu%20Foundation%20TBI.pdf' },
    { title: 'VISHWA VISHWANI INSTITUTE OF SYSTEM AND MANAGEMENT', file: '../../../assets/REPORTS/VISHWA%20VISHWANI%20INSTITUTE%20OF%20SYSTEM%20AND%20MANAGEMENT.pdf' }
  ];

  openDocument(fileName: string) {
    const fileUrl = `assets/reports/${fileName}`;
    window.open(fileUrl, '_blank');
  }
  filteredCards() {
    if (!this.searchTerm) return this.cards;
    return this.cards.filter(card =>
      card.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
