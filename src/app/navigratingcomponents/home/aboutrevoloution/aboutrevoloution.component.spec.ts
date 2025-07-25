import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutrevoloutionComponent } from './aboutrevoloution.component';

describe('AboutrevoloutionComponent', () => {
  let component: AboutrevoloutionComponent;
  let fixture: ComponentFixture<AboutrevoloutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutrevoloutionComponent]
    });
    fixture = TestBed.createComponent(AboutrevoloutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
