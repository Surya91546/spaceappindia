import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner8Component } from './banner8.component';

describe('Banner8Component', () => {
  let component: Banner8Component;
  let fixture: ComponentFixture<Banner8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Banner8Component]
    });
    fixture = TestBed.createComponent(Banner8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
