import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesBannerComponent } from './challenges-banner.component';

describe('ChallengesBannerComponent', () => {
  let component: ChallengesBannerComponent;
  let fixture: ComponentFixture<ChallengesBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengesBannerComponent]
    });
    fixture = TestBed.createComponent(ChallengesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
