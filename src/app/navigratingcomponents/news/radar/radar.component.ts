import { Component } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent {
isSweeping = false;
  options = {
    path: 'assets/animations/Radar.json',
    autoplay: false,
    loop: true,
  };

  animationItem: any;

  handleAnimation(animation: any) {
    this.animationItem = animation;
  }

  startSweep() {
    this.isSweeping = true;
    this.animationItem?.goToAndPlay(0, true);
    setTimeout(() => {
      this.isSweeping = false;
      this.animationItem?.stop();
    }, 4000);
  }
}
