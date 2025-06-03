import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isMobile = false;
  studentData = { name: 'John Doe' }; // Optional: Replace with actual data

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
        if (!this.isMobile) {
          this.sidenav.open();
        }
      });
  }

  closeOnMobile() {
    if (this.isMobile) this.sidenav.close();
  }
}
