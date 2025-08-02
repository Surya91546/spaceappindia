import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isScrolled = false;

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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
