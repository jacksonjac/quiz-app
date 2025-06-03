import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

 displayedColumns: string[] = [
    'no',
    'studentName',
    'phoneNumber',
    'email',
    'subscription',
    'selectedSubject',
    'status'
  ];
  dataSource = new MatTableDataSource<Student>([]);

  constructor(private firestore: Firestore) {}

  async ngOnInit() {
    await this.fetchStudentsFromFirebase();
  }

  async fetchStudentsFromFirebase() {
    const collectionRef = collection(this.firestore, 'xlentRegistrationData');
    const snapshot = await getDocs(collectionRef);

    const students: Student[] = [];
    let counter = 1;

    snapshot.forEach((doc) => {
      const data = doc.data() as any;
    
      students.push({
        no: counter++,
        studentName: data.name || '',
        phoneNumber: data.phone || '',
        email: data.email || '',
        subscription: data.subscription.price || 'Free',
        selectedSubject: data.selectedSubjects || '',
        status: 'Active' // you can update this based on your logic
      });
    });

    this.dataSource.data = students;
    console.log(this.dataSource.data,"datas")
  }

blockStudent(student: any) {
  // You can implement logic to mark them as blocked in Firebase
  console.log('Block button clicked for:', student);

  // Example: if you want to update status in Firestore
  // You would need to store the doc ID when fetching students
}


}
interface Student {
  no: number;
  studentName: string;
  phoneNumber: string;
  email: string;
  subscription: string;
  selectedSubject: string;
  status: string;
}