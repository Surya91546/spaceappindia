import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveContextComponent } from './above-context.component';

describe('AboveContextComponent', () => {
  let component: AboveContextComponent;
  let fixture: ComponentFixture<AboveContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboveContextComponent]
    });
    fixture = TestBed.createComponent(AboveContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
