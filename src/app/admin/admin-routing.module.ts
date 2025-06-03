import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminComponent } from './admin.component';
import { PortalComponent } from './portal/portal.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamsComponent } from './exams/exams.component';
import { StudentsComponent } from './students/students.component';




const routes: Routes = [
  { path: '', component: LoginComponent },  // default is login page
  {
    path: 'portal',
    component: PortalComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {path:'exams',component:ExamsComponent},
      {path:'students',component:StudentsComponent}
      // add more child routes here
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }