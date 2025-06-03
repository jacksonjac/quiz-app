import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, doc, updateDoc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent {

  selectedPlan: any;
  studentId: string | null = null;

  constructor(private router: Router, private firestore: Firestore) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { selectedPlan?: any };

    this.selectedPlan = state?.selectedPlan;
    this.studentId = localStorage.getItem('studentId'); // ✅ Get studentId from localStorage

    console.log('Selected Plan:', this.selectedPlan);
    console.log('Student ID (from localStorage):', this.studentId);
  }

  async onSuccess() {
    if (!this.studentId || !this.selectedPlan) {
      alert('Missing student ID or plan.');
      return;
    }

    try {
      const token = `${this.studentId}_${this.selectedPlan.price}_${this.selectedPlan.validity}`;
      const studentDocRef = doc(this.firestore, 'xlentRegistrationData', this.studentId);

      const docSnap = await getDoc(studentDocRef);
      if (docSnap.exists()) {
        await updateDoc(studentDocRef, {
          dashboardToken: token
        });

        const studentName = docSnap.data()['name'] || 'Student';

        // ✅ Store to localStorage
        localStorage.setItem('dashboardtoken', token);
        localStorage.setItem('studentId', this.studentId);
        localStorage.setItem('studentName', studentName);

        console.log('✅ Dashboard token stored locally:', token);

        // ✅ Navigate to dashboard
        this.router.navigate(['user', 'dashboard', token]);
      } else {
        console.error('❌ Student document not found.');
        alert('Student data not found.');
      }
    } catch (error) {
      console.error('❌ Error updating dashboard token:', error);
      alert('An error occurred while processing your subscription.');
    }
  }

  onFailed() {
    alert('❌ Subscription Failed. Please try again.');
  }
}
