import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
   @ViewChild('sidenav') sidenav!: MatSidenav;
  isMobile = false;
  sidenavMode: 'side' | 'over' = 'side';

  studentData: any = null;  // ✅ Store full student data

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private firestore: Firestore
  ) {}

  ngOnInit() {
    
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
        this.sidenavMode = this.isMobile ? 'over' : 'side';
        if (!this.isMobile) {
          this.sidenav.open();
        } else {
          this.sidenav.close();
        }
      });

    const dashboardToken = this.route.snapshot.paramMap.get('token');

    if (dashboardToken) {
      this.fetchStudentData(dashboardToken);
    }
  }

  async fetchStudentData(token: string) {
    try {
      const usersRef = collection(this.firestore, 'xlentRegistrationData');
      const q = query(usersRef, where('dashboardToken', '==', token));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        this.studentData = querySnapshot.docs[0].data(); // ✅ Store full data
        console.log('Student Data:', this.studentData);
      } else {
        console.warn('No student found with this dashboard token');
      }
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  }
}
