import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassionateComponent } from './passionate.component';

describe('PassionateComponent', () => {
  let component: PassionateComponent;
  let fixture: ComponentFixture<PassionateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassionateComponent]
    });
    fixture = TestBed.createComponent(PassionateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
