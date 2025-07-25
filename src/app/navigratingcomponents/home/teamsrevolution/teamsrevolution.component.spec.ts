import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsrevolutionComponent } from './teamsrevolution.component';

describe('TeamsrevolutionComponent', () => {
  let component: TeamsrevolutionComponent;
  let fixture: ComponentFixture<TeamsrevolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsrevolutionComponent]
    });
    fixture = TestBed.createComponent(TeamsrevolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
