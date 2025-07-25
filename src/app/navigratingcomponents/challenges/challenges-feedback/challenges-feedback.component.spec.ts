import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesFeedbackComponent } from './challenges-feedback.component';

describe('ChallengesFeedbackComponent', () => {
  let component: ChallengesFeedbackComponent;
  let fixture: ComponentFixture<ChallengesFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengesFeedbackComponent]
    });
    fixture = TestBed.createComponent(ChallengesFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
