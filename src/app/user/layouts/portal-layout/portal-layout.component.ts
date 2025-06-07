import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal-layout',
  templateUrl: './portal-layout.component.html',
  styleUrls: ['./portal-layout.component.css']
})
export class PortalLayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isMobile = false;
  studentName: string = 'Student';
  dashboardToken: string | null = '';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('dashboardtoken');
    this.dashboardToken = token;

    const name = localStorage.getItem('studentName');
    if (name) {
      this.studentName = name;
    }

    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
      if (this.sidenav) {
        this.isMobile ? this.sidenav.close() : this.sidenav.open();
      }
    });
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  goToDashboard() {
    if (this.dashboardToken) {
      this.router.navigate(['/user/dashboard', this.dashboardToken]);
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
