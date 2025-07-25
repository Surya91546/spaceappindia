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
      answer: 'This challenge aims to solve... (add your content)', 
      isOpen: false 
    },
    { 
      question: 'How can personalization enhance solutions in this challenge?', 
      answer: 'Personalization helps by...', 
      isOpen: false 
    },
    { 
      question: 'AI\'s impact on solutions?', 
      answer: 'AI impacts solutions by...', 
      isOpen: false 
    },
    { 
      question: 'Automation vs. human creativity?', 
      answer: 'Automation enhances...', 
      isOpen: false 
    },
    { 
      question: 'How does AI improve outreach effectiveness?', 
      answer: 'AI improves outreach by...', 
      isOpen: false 
    },
    { 
      question: 'What are the benefits of using AI in outreach?', 
      answer: 'Benefits include...', 
      isOpen: false 
    },
    { 
      question: 'Can AI help in optimizing outreach campaigns?', 
      answer: 'AI helps in optimizing by...', 
      isOpen: false 
    },
    { 
      question: 'Steps to build a winning solution?', 
      answer: 'The steps are...', 
      isOpen: false 
    }
  ];

  toggleFAQ(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
