import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-preloading',
  templateUrl: './preloading.component.html',
  styleUrls: ['./preloading.component.css']
})
export class PreloadingComponent {
@Output() done = new EventEmitter<void>();

  animationOptions = {
    path: 'assets/animations/data.json', 
    loop: false,
    autoplay: true
  };

  handleAnimationComplete() {
    this.done.emit();
  }
}
