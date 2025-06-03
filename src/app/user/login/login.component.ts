import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firestore: Firestore,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]], // assuming username is email
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
  if (this.loginForm.valid) {
    const { username, password } = this.loginForm.value;

    try {
      const usersRef = collection(this.firestore, 'xlentRegistrationData');
      const q = query(usersRef, where('email', '==', username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert('No user found with this email');
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      if (userData['password'] === password) {
       

        // Store user details in localStorage
        localStorage.setItem('studentId', userDoc.id);
        localStorage.setItem('studentName', userData['name']);

        // Get the dashboard token
       const dashboardToken = userData['dashboardToken'];
  localStorage.setItem('dashboardtoken', dashboardToken); // ← add this line
  console.log("dashboardToken", dashboardToken);
        // Navigate to the dashboard using the token
   this.router.navigate(['user', 'dashboard', dashboardToken])



      } else {
        alert('Wrong password');
      }

    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong, please try again');
    }
  }
}

}
