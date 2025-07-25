import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviouseditionsComponent } from './previouseditions.component';

describe('PreviouseditionsComponent', () => {
  let component: PreviouseditionsComponent;
  let fixture: ComponentFixture<PreviouseditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviouseditionsComponent]
    });
    fixture = TestBed.createComponent(PreviouseditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
