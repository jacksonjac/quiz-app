import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Firestore, collection, addDoc, CollectionReference, getDocs } from '@angular/fire/firestore';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationForm: FormGroup;

  language1Options = [ 'General Paper'];
  language2Options = [
    'English',
    'Malayalam',
    'Arabic',
    'Psychology',
    'Commerce',
    'Sociology',
    'History',
    'Political Science',
    'Education',
    'Social work',
    'French',
    'German',
    'Linguistics',
    'Urdu'
  ];
  constructor(private fb: FormBuilder, private router: Router, private firestore: Firestore) {
this.registrationForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
  place: ['', Validators.required],
  enableLang1: [false],
  enableLang2: [false],
  language1: [''],
  language2: [''],
  password: ['', [Validators.required, Validators.minLength(6)]],
  confirmPassword: ['', Validators.required]
}, { validators: [this.atLeastOneSubjectValidator, this.passwordMatchValidator] });
  }

atLeastOneSubjectValidator(form: FormGroup) {
  const lang1Enabled = form.get('enableLang1')?.value;
  const lang2Enabled = form.get('enableLang2')?.value;
  const lang2 = form.get('language2')?.value;

  // Valid if Paper 1 is checked OR (Paper 2 is checked AND a subject is selected)
  if (lang1Enabled || (lang2Enabled && lang2)) {
    return null;
  }

  return { atLeastOneRequired: true };
}

async onSubmit() {
  if (this.registrationForm.valid) {
    const selectedSubjects = this.getSelectedSubjects();
const registrationData = {
  ...this.registrationForm.value,
  selectedSubjects,
  registrationDate: new Date()
};

    try {
      // Store in 'xlentRegistrationData' and capture the document reference
      const docRef = await addDoc(collection(this.firestore, 'xlentRegistrationData'), registrationData);

      // Save the student ID to localStorage for later use
      localStorage.setItem('studentId', docRef.id);

      // Clear form and navigate
      this.registrationForm.reset();
      this.router.navigate(['user/subscription']);
    } catch (error) {
      console.error('Error saving registration data:', error);
    }
  }
}
passwordMatchValidator(form: FormGroup) {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;

  if (password && confirmPassword && password !== confirmPassword) {
    return { passwordMismatch: true };
  }
  return null;
}
  getSelectedSubjects(): string {
  const { enableLang1, enableLang2, language1, language2 } = this.registrationForm.value;
  if (enableLang1) return 'General Paper';
  if (enableLang2 && language2) return language2;
  return '';
}

}
