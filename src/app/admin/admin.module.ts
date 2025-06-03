import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Component and Pipe Imports
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { ExamsComponent } from './exams/exams.component';
import { SearchFilterPipe } from '../pipe/search-filter.pipe';

// Routing and Toastr
import { AdminRoutingModule } from './admin-routing.module';
import { ToastrModule } from 'ngx-toastr';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { AddNewExamComponent } from './add-new-exam/add-new-exam.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    PortalComponent,
    DashboardComponent,
    StudentsComponent,
    ExamsComponent,
    SearchFilterPipe,
    AddNewExamComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AdminRoutingModule,
    ToastrModule,
    // Angular Material Modules (grouped at bottom)
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatCheckboxModule,
     MatSidenavModule,
      MatTableModule,
    
  ]
})
export class AdminModule { }
