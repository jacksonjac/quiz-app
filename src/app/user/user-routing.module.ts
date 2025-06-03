import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SubscriptionpageComponent } from './subscriptionpage/subscriptionpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultpageComponent } from './resultpage/resultpage.component';
import { AuthLayoutsComponent } from './layouts/auth-layouts/auth-layouts.component';
import { PortalLayoutComponent } from './layouts/portal-layout/portal-layout.component';
import { ExamlistComponent } from './examlist/examlist.component';
import { ExamreportComponent } from './examreport/examreport.component';
import { ExampageComponent } from './exampage/exampage.component';

const routes: Routes = [
  {
  path: '',
  component: AuthLayoutsComponent,
  children: [
    { path: '', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'subscription', component: SubscriptionpageComponent },
    { path: 'result', component: ResultpageComponent }
  ]
},
{
  path: '',
  component: PortalLayoutComponent,
  children: [
   { path: 'dashboard/:token', component: DashboardComponent },
   {path: 'exams',component:ExamlistComponent},
   {path:'exampage',component:ExampageComponent},
   {path:'examreport',component:ExamreportComponent}
   
  ]
},
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
