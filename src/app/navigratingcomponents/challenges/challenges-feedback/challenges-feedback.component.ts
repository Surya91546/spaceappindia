import { Component } from '@angular/core';

@Component({
  selector: 'app-challenges-feedback',
  templateUrl: './challenges-feedback.component.html',
  styleUrls: ['./challenges-feedback.component.css']
})
export class ChallengesFeedbackComponent {
  topRowFeedbacks = [
    {
      name: 'R.A. Mashelkar',
      handle: 'Former CSIR DG',
      comment: 'All my best wishes with you Space Apps Team and SUMVN.',
      image: '../../../assets/teams-feedback/Ellipse451.png',
      alt: ''
    },
    {
      name: 'Jayesh Ranjan, IAS',
      handle: 'Govt of Telangana',
      comment: 'It’s a platform where entrepreneurs, students, and innovators connect with technology and sciences.',
      image: '../../../assets/teams-feedback/Ellipse452.png',
      alt: ''
    },
    {
      name: 'Srinivas Kollipara',
      handle: 'COO, T-Hub',
      comment: 'This is going national, expecting more participation. Students came up with brilliant ideas last year!',
      image: '../../../assets/teams-feedback/Ellipse454.png',
      alt: ''
    },
  ];

  bottomRowFeedbacks = [
    {
      name: 'Phanindra Sama',
      handle: 'Founder Of Red Bus',
      comment: 'Big congrats to NASA Space Apps 2018 participants! Keep testing your imagination through such events.',
      image: '../../../assets/teams-feedback/Ellipse453.png',
      alt: ''
    },
    {
      name: 'Amrapali KATA, IAS',
      handle: 'Warangal Collector',
      comment: 'If you’re an engineer, designer, researcher, or startup—anyone solving problems—this is for you.',
      image: '../../../assets/teams-feedback/Ellipse455.png',
      alt: ''
    },
    {
      name: 'Madiha Ahmed',
      handle: 'Psychologist & Researcher',
      comment: 'Great job in space technology!',
      image: '../../../assets/teams-feedback/Ellipse457.png',
      alt: ''
    },
    {
      name: 'Tripti Shinghal Somani',
      handle: 'Founder, KGS Advisors',
      comment: 'Great teamwork SUMVN, proud to be your partner!',
      image: '../../../assets/teams-feedback/Ellipse456.png',
      alt: ''
    },
  ];

  animationDuration = 60;
}
