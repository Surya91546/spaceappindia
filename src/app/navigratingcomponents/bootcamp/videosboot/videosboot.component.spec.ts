import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosbootComponent } from './videosboot.component';

describe('VideosbootComponent', () => {
  let component: VideosbootComponent;
  let fixture: ComponentFixture<VideosbootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideosbootComponent]
    });
    fixture = TestBed.createComponent(VideosbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
