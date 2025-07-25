import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner10Component } from './banner10.component';

describe('Banner10Component', () => {
  let component: Banner10Component;
  let fixture: ComponentFixture<Banner10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Banner10Component]
    });
    fixture = TestBed.createComponent(Banner10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
