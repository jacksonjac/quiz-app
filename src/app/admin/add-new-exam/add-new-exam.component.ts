import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-exam',
  templateUrl: './add-new-exam.component.html',
  styleUrls: ['./add-new-exam.component.css']
})
export class AddNewExamComponent {


   examForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.examForm = this.fb.group({
      examName: ['', Validators.required],
      subject: ['', Validators.required],
      duration: ['', Validators.required],
      questionCount: [null, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.examForm.valid) {
      console.log('Exam Created:', this.examForm.value);
      // Submit to API or navigate after success
    }
  }

}
