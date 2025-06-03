import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
@Component({
  selector: 'app-portal-layout',
  templateUrl: './portal-layout.component.html',
  styleUrls: ['./portal-layout.component.css']
})
export class PortalLayoutComponent {

   @ViewChild('sidenav') sidenav!: MatSidenav;
    isMobile = false;
    hasDashboardAccess = false;
  studentName: string = 'Student';
 dashboardToken: string | null = '';

    constructor(private breakpointObserver: BreakpointObserver,private router: Router) {}
  
   ngOnInit(): void {
  const token = localStorage.getItem('dashboardtoken');
  this.dashboardToken = token;

  const name = localStorage.getItem('studentName');
  if (name) {
    this.studentName = name;
  }

  this.hasDashboardAccess = !!token;

  this.breakpointObserver.observe([Breakpoints.Handset])
    .subscribe(result => {
      this.isMobile = result.matches;
      if (this.hasDashboardAccess) {
        if (!this.isMobile) {
          this.sidenav?.open();
        } else {
          this.sidenav?.close();
        }
      }
    });
}
goToDashboard() {
  if (this.dashboardToken) {
    this.router.navigate(['/user/dashboard', this.dashboardToken]);
  } else {
    console.warn('No dashboard token found!');
    this.router.navigate(['/']); // fallback
  }
}

  
    closeOnMobile() {
      if (this.isMobile) {
        this.sidenav.close();
      }
    }
logout() {
  localStorage.removeItem('dashboardtoken');
  localStorage.removeItem('studentName');
  localStorage.removeItem('studentId');
  this.router.navigate(['user/login']); // Redirect to login page
}
}
