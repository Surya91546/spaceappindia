import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {}

  closeOffcanvas(): void {
    const offcanvasMenu = document.getElementById('offcanvasNavbar');
    if (offcanvasMenu) {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasMenu);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.closeOffcanvas();
    });
  }
}
