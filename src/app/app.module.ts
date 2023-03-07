import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InviteUserComponent } from './Pre-Onboarding/invite-user/invite-user.component';
import { LoginComponent } from './Pre-Onboarding/login/login.component';
import { CandidateDetailsComponent } from './Pre-Onboarding/candidate-details/candidate-details.component';
import { PreonboardingCompleteComponent } from './Pre-Onboarding/preonboarding-complete/preonboarding-complete.component';
import { PreOnboardingComponent } from './Pre-Onboarding/pre-onboarding/pre-onboarding.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ContStateCityService } from './services/cont-state-city.service';
import { ConstcityComponent } from './Testing/constcity/constcity.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PreonboardingCompleteNextpartComponent } from './Pre-Onboarding/preonboarding-complete-nextpart/preonboarding-complete-nextpart.component';
import { TagInputModule } from 'ngx-chips';
import { ApplyLeaveComponent } from './Onboaring/apply-leave/apply-leave.component';
import { ContactUsComponent } from './Onboaring/contact-us/contact-us.component';
import { DashboardComponent } from './Onboaring/dashboard/dashboard.component';
import { LoginOnboaringComponent } from './Onboaring/login-onboaring/login-onboaring.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimesheetComponent } from './Onboaring/time-sheet/timesheet/timesheet.component';
import { UpdateTimesheetComponent } from './Onboaring/time-sheet/update-timesheet/update-timesheet.component';
import { ProjectsComponent } from './Onboaring/projects/projects.component';
import { EditProjectsComponent } from './Onboaring/edit-projects/edit-projects.component';
import { HeaderComponent } from './Onboaring/header/header.component';
import { FooterComponent } from './Onboaring/footer/footer.component';
import { LeftPanelComponent } from './Onboaring/left-panel/left-panel.component';
import { RestrictcharComponent } from './Testing/restrictchar/restrictchar.component';
import {MatSelectModule} from '@angular/material/select';
import { MatSelectFilterModule } from 'mat-select-filter';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UserComponent } from './Testing/user/user.component';
import { PendingReportComponent } from './hr/pending-report/pending-report.component';
import { NewHiresComponent } from './hr/new-hires/new-hires.component';
import { AddExitDetailsComponent } from './hr/add-exitdetails/add-exit-details/add-exit-details.component';

import { AddHolidayComponent } from './hr/add-holiday/add-holiday.component';
import { AddLeaveComponent } from './hr/add-leave/add-leave.component';
import { AddScheduleComponent } from './hr/add-schedule/add-schedule.component';

import { ConfigurePayPeriodComponent } from './hr/configure-pay-period/configure-pay-period.component';
import { EmployeeRegistrationOnboardingComponent } from './Onboaring/employee-registration-onboarding/employee-registration-onboarding.component';
// import { EmployeeComponent } from './hr/employee/employee.component';
import { MyInfoComponent } from './Onboaring/my-info/my-info.component';
import { EditCandidateDetailsComponent } from './Pre-Onboarding/edit-candidate-details/edit-candidate-details.component';
import { EditDesignationComponent } from './hr/edit-designation/edit-designation.component';
import { EditDepartmentComponent } from './hr/edit-department/edit-department.component';
import { LeaveApplicationComponent } from './hr/leave/leave-application/leave-application.component';
import { LeaveTrackerComponent } from './hr/leave/leave-tracker/leave-tracker.component';
import { EditApplyLeaveComponent } from './hr/leave/edit-apply-leave/edit-apply-leave.component';
import { DepartmentComponent } from './hr/department/department.component';
import { DesignationComponent } from './hr/designation/designation.component';
import { DesignationDetailsComponent } from './hr/designation-details/designation-details.component';
// import { MatSelectFilterModule } from 'mat-select-filter';
import { DepartmentDetailsComponent } from './hr/department-details/department-details.component';
import { HolidayComponent } from './hr/holiday/holiday.component';
import { EditHolidayComponent } from './hr/edit-holiday/edit-holiday.component';
import { AddTimesheetComponent } from './Onboaring/time-sheet/add-timesheet/add-timesheet.component';
import { AddCustomizeBalanceComponent } from './hr/add-customize-balance/add-customize-balance.component';
import { CustomizeBalanceComponent } from './hr/customize-balance/customize-balance.component';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentDetailsComponent,
    DesignationDetailsComponent,
    InviteUserComponent,
    AddScheduleComponent,
    EditDesignationComponent,
    EditDepartmentComponent,
    LoginComponent,
    CandidateDetailsComponent,
    PreonboardingCompleteComponent,
    PreOnboardingComponent,
    ConstcityComponent,
    PreonboardingCompleteNextpartComponent,
    
    MyInfoComponent,
    EditCandidateDetailsComponent,
    ContactUsComponent,
   
    DashboardComponent,
 
    LoginOnboaringComponent,
    TimesheetComponent,
    UpdateTimesheetComponent,
   ProjectsComponent,
   EditProjectsComponent,
   HeaderComponent,
   FooterComponent,
   LeftPanelComponent,
   
   RestrictcharComponent,
   
   UserComponent,
   PendingReportComponent,
   NewHiresComponent,
   AddExitDetailsComponent,

  AddHolidayComponent,
  AddLeaveComponent,
 
 
  ConfigurePayPeriodComponent,
  ApplyLeaveComponent,
  EmployeeRegistrationOnboardingComponent,
  LeaveApplicationComponent,
  LeaveTrackerComponent,
  EditApplyLeaveComponent,
  DepartmentComponent,
 
  DesignationComponent,
  LoginOnboaringComponent,
  HolidayComponent,
  EditHolidayComponent,
  AddTimesheetComponent,
  AddCustomizeBalanceComponent,
  CustomizeBalanceComponent,
 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatAutocompleteModule,
    NgxUiLoaderModule,  
    BrowserAnimationsModule,
    MatSelectModule,
    MatSelectFilterModule,

    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [ContStateCityService,DatePipe],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
