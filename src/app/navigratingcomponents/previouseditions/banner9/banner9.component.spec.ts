import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner9Component } from './banner9.component';

describe('Banner9Component', () => {
  let component: Banner9Component;
  let fixture: ComponentFixture<Banner9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Banner9Component]
    });
    fixture = TestBed.createComponent(Banner9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
