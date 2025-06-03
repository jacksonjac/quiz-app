import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, doc, updateDoc ,getDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-subscriptionpage',
  templateUrl: './subscriptionpage.component.html',
  styleUrls: ['./subscriptionpage.component.css']
})
export class SubscriptionpageComponent {

  subscriptions = [
    { price: 99, validity: '1 month' },
    { price: 199, validity: '3 months' },
    { price: 399, validity: '6 months' }
  ];

  studentName: string | null = null;

  constructor(private router: Router, private firestore: Firestore) {}

  async ngOnInit() {
    const studentId = localStorage.getItem('studentId');
    if (studentId) {
      const studentDocRef = doc(this.firestore, 'xlentRegistrationData', studentId);
      const docSnap = await getDoc(studentDocRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        this.studentName = data['name'] || 'Student';
      }
    }
  }

  async selectPlan(plan: any) {
    const studentId = localStorage.getItem('studentId');

    if (studentId) {
      try {
        const studentDocRef = doc(this.firestore, 'xlentRegistrationData', studentId);

        const numericValidity = parseInt(plan.validity);

        const subscriptionData = {
          price: plan.price,
          validity: numericValidity
        };

        await updateDoc(studentDocRef, {
          subscription: subscriptionData
        });

        console.log('Subscription stored:', subscriptionData);
       this.router.navigate(['user/result'], { 
  state: { selectedPlan: plan, studentId: studentId } 
});

      } catch (error) {
        console.error('Error saving subscription:', error);
      }
    } else {
      console.warn('Student ID not found in localStorage');
    }
  }
}
