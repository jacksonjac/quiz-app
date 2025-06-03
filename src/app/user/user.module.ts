import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { RegistrationComponent } from './registration/registration.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginComponent } from './login/login.component';
import { SubscriptionpageComponent } from './subscriptionpage/subscriptionpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ExamlistComponent } from './examlist/examlist.component';
import { ExamreportComponent } from './examreport/examreport.component';
import { ResultpageComponent } from './resultpage/resultpage.component';
import { AuthLayoutsComponent } from './layouts/auth-layouts/auth-layouts.component';
import { PortalLayoutComponent } from './layouts/portal-layout/portal-layout.component';
import { MatTableModule } from '@angular/material/table';

import { MatChipsModule } from '@angular/material/chips';
import { ExampageComponent } from './exampage/exampage.component';
@NgModule({
  declarations: [
   
    UserComponent,
        RegistrationComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        SubscriptionpageComponent,
        DashboardComponent,
        ExamlistComponent,
        ExamreportComponent,
        ResultpageComponent,
        AuthLayoutsComponent,
        PortalLayoutComponent,
        ExampageComponent,
      
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ToastrModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
     MatTableModule,
    UserRoutingModule
     

    
   
  ]
})
export class UserModule { }
