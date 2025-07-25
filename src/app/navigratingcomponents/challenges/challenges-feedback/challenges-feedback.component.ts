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
    },
    {
      name: 'Jayesh Ranjan, IAS',
      handle: 'Govt of Telangana',
      comment: 'It’s a platform where entrepreneurs, students, and innovators connect with technology and sciences.',
    },
    {
      name: 'Srinivas Kollipara',
      handle: 'CEO, T-Hub',
      comment: 'This is going national, expecting more participation. Students came up with brilliant ideas last year!',
    },
  ];

  bottomRowFeedbacks = [
    {
      name: 'Phanindra Sama',
      handle: 'Chief Innovation Officer',
      comment: 'Big congrats to NASA Space Apps 2018 participants! Keep testing your imagination through such events.',
    },
    {
      name: 'Amrapali KATA, IAS',
      handle: 'Warangal Collector',
      comment: 'If you’re an engineer, designer, researcher, or startup—anyone solving problems—this is for you.',
    },
    {
      name: 'Madiha Ahmed',
      handle: 'Psychologist & Researcher',
      comment: 'Great job in space technology!',
    },
    {
      name: 'Tripti Shinghal Somani',
      handle: 'Founder, KGS Advisors',
      comment: 'Great teamwork SUMVN, proud to be your partner!',
    },
  ];

  animationDuration = 60;
}
