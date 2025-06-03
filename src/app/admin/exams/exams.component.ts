import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent {


  displayedColumns: string[] = ['no', 'examName', 'subject', 'duration', 'status', 'action'];
  dataSource = new MatTableDataSource([
    { no: 1, examName: 'Maths Final', subject: 'Mathematics', duration: '2 hours', status: 'Completed' },
    { no: 2, examName: 'Physics Midterm', subject: 'Physics', duration: '1.5 hours', status: 'Pending' },
    { no: 3, examName: 'Chemistry Quiz', subject: 'Chemistry', duration: '1 hour', status: 'Completed' },
    { no: 4, examName: 'Biology Test', subject: 'Biology', duration: '1 hour', status: 'Pending' }
  ]);

  constructor() {}

  ngOnInit(): void {}

  editExam(row: any) {
    console.log('Edit clicked for:', row);
  }

  deleteExam(row: any) {
    console.log('Delete clicked for:', row);
  }

}
