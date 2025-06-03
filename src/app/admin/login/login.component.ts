import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  // Sample mock admin list
  admins = [
    { email: 'jacksonjack333@gmail.com', password: 'jack@123' },
    { email: 'admin@example.com', password: 'admin123' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    const matchedAdmin = this.admins.find(
      admin => admin.email === email && admin.password === password
    );

    if (matchedAdmin) {
      localStorage.setItem('adminToken', 'someSecureToken');
      this.router.navigate(['/admin/portal/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
