import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-examlist',
  templateUrl: './examlist.component.html',
  styleUrls: ['./examlist.component.css']
})
export class ExamlistComponent {


   displayedColumns: string[] = ['no', 'examName', 'subject', 'duration', 'status'];
    dataSource = new MatTableDataSource([
      { no: 1, examName: 'Maths Final', subject: 'Mathematics', duration: '2 hours' },
      { no: 2, examName: 'Physics Midterm', subject: 'Physics', duration: '1.5 hours' },
      { no: 3, examName: 'Chemistry Quiz', subject: 'Chemistry', duration: '1 hour'},
      { no: 4, examName: 'Biology Test', subject: 'Biology', duration: '1 hour' }
    ]);
  
    constructor(private router: Router) {}
  
    ngOnInit(): void {}
  
    editExam(row: any) {
      console.log('Edit clicked for:', row);
    }
  
    deleteExam(row: any) {
      console.log('Delete clicked for:', row);
    }
startExam(element: any) {
  this.router.navigate(['user/exampage'], {
    queryParams: {
      examId: element.id,
      subject: element.subject,
      examName: element.examName
    }
  });
}
}
