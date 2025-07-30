import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: 'What is the core problem this tech challenge aims to solve?',
      answer: 'NASA Space Apps Challenge focuses on solving real-world problems using open data from NASA. These can include climate change, space exploration, biodiversity, disaster response, and more. Each year, NASA publishes themed challenges around global issues.',
      isOpen: false
    },
    {
      question: 'Why is the Space Apps Challenge important?',
      answer: 'It encourages global collaboration, open-source innovation, and problem-solving using real NASA data. It helps students, developers, scientists, and creators build solutions with global impact.',
      isOpen: false
    },
    {
      question: 'Who can participate in the Space Apps Challenge?',
      answer: 'Anyone can join — from students to professionals. You don’t need to be a coder. Designers, storytellers, researchers, and domain experts are all welcome to join or form teams.',
      isOpen: false
    },
    {
      question: 'What types of challenges are offered?',
      answer: 'Challenges cover areas like Earth science, space tech, data visualization, storytelling, public engagement, environment, and planetary science. Participants choose the one that best matches their skills and interest.',
      isOpen: false
    },
    {
      question: 'How should I form a team?',
      answer: 'Form a diverse team with members having skills in programming, design, data analysis, and communication. Diversity boosts creativity and enables well-rounded solutions.',
      isOpen: false
    },
    {
      question: 'What makes a winning solution?',
      answer: 'A winning solution clearly solves a challenge using NASA data, is innovative, easy to use, impactful, and well-presented. Good documentation, visuals, and a demo video are also key to standing out.',
      isOpen: false
    },
    {
      question: 'Can I use any programming language or tools?',
      answer: 'Yes. There are no restrictions on tools or languages. Use what your team is comfortable with — whether it’s web technologies, mobile apps, data tools, or hardware solutions.',
      isOpen: false
    },
    {
      question: 'What do we need to submit at the end?',
      answer: 'You must submit a project description, a GitHub or project link, visuals or screenshots, and a 2–3 minute demo video. Make sure it explains the problem, solution, how you used NASA data, and your impact.',
      isOpen: false
    }
  ];

  toggleFAQ(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
