import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLeaveComponent } from './Onboaring/apply-leave/apply-leave.component';
import { CandidateDetailsComponent } from './Pre-Onboarding/candidate-details/candidate-details.component';
import { ContactUsComponent } from './Onboaring/contact-us/contact-us.component';
import { DashboardComponent } from './Onboaring/dashboard/dashboard.component';
import { InviteUserComponent } from './Pre-Onboarding/invite-user/invite-user.component';
import { LoginComponent } from './Pre-Onboarding/login/login.component';
import { PreOnboardingComponent } from './Pre-Onboarding/pre-onboarding/pre-onboarding.component';
import { PreonboardingCompleteNextpartComponent } from './Pre-Onboarding/preonboarding-complete-nextpart/preonboarding-complete-nextpart.component';
import { PreonboardingCompleteComponent } from './Pre-Onboarding/preonboarding-complete/preonboarding-complete.component';
import { ConstcityComponent } from './Testing/constcity/constcity.component';
import { LoginOnboaringComponent } from './Onboaring/login-onboaring/login-onboaring.component';
import { TimesheetComponent } from './Onboaring/time-sheet/timesheet/timesheet.component';
import { UpdateTimesheetComponent } from './Onboaring/time-sheet/update-timesheet/update-timesheet.component';
import { ProjectsComponent } from './Onboaring/projects/projects.component';
import { EditProjectsComponent } from './Onboaring/edit-projects/edit-projects.component';
// import { RestrictcharComponent } from './Testing/restrictchar/restrictchar.component';
import { UserComponent } from './Testing/user/user.component';
import { NewHiresComponent } from './hr/new-hires/new-hires.component';
import { PendingReportComponent } from './hr/pending-report/pending-report.component';
import { AddExitDetailsComponent } from './hr/add-exitdetails/add-exit-details/add-exit-details.component';
// import { DepartmentDetailsComponent } from './hr/department-details/department-details.component';
import { AddHolidayComponent } from './hr/add-holiday/add-holiday.component';
import { AddLeaveComponent } from './hr/add-leave/add-leave.component';
import { ConfigurePayPeriodComponent } from './hr/configure-pay-period/configure-pay-period.component';
// import { DesignationDetailsComponent } from './hr/designation-details/designation-details.component';
import { AddScheduleComponent } from './hr/add-schedule/add-schedule.component';
import { EmployeeRegistrationOnboardingComponent } from './Onboaring/employee-registration-onboarding/employee-registration-onboarding.component';
import { EditApplyLeaveComponent } from './hr/leave/edit-apply-leave/edit-apply-leave.component';
import { EditDesignationComponent } from './hr/edit-designation/edit-designation.component';
import { EditDepartmentComponent } from './hr/edit-department/edit-department.component';
import { DesignationComponent } from './hr/designation/designation.component';
// import { DesignationDetailsComponent } from './hr/designation-details/designation-details.component';
import { LeaveTrackerComponent } from './hr/leave/leave-tracker/leave-tracker.component';
// import { DepartmentDetailsComponent } from './hr/department-details/department-details.component';
import { DepartmentComponent } from './hr/department/department.component';
import { LeaveApplicationComponent } from './hr/leave/leave-application/leave-application.component';
import { EditCandidateDetailsComponent } from './Pre-Onboarding/edit-candidate-details/edit-candidate-details.component';
import { DesignationDetailsComponent } from './hr/designation-details/designation-details.component';
import { DepartmentDetailsComponent } from './hr/department-details/department-details.component';
import { HolidayComponent } from './hr/holiday/holiday.component';
import { EditHolidayComponent } from './hr/edit-holiday/edit-holiday.component';
import { AddTimesheetComponent } from './Onboaring/time-sheet/add-timesheet/add-timesheet.component';
import { AddCustomizeBalanceComponent } from './hr/add-customize-balance/add-customize-balance.component';
import { CustomizeBalanceComponent } from './hr/customize-balance/customize-balance.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'add-schedule',
    component: AddScheduleComponent,
  },
  {
    path: 'add-customize-balance',
    component: AddCustomizeBalanceComponent,
  },
  {
    path: 'customize-balance',
    component: CustomizeBalanceComponent,
  },
  {
    path: 'holiday',
    component: HolidayComponent,
  },
  {
    path: 'edit-holiday/:HolidayId',
    component: EditHolidayComponent,
  },

  
  {
    path: 'login-Onboarding',
    component:LoginOnboaringComponent,
  },
  {
    path: 'department-details',
    component: DepartmentDetailsComponent,
  },
  {
    path: 'edit-apply-leave/:employee_id',
    component: EditApplyLeaveComponent,
  },
  {
    path: 'leave-application',
    component: LeaveApplicationComponent,
  },

 
  {
    path: 'leave-application/edit-apply-leave',
    component: EditApplyLeaveComponent,
  },
  {
    path: 'leave-tracker',
    component: LeaveTrackerComponent,
  },


  {

    path: 'invite-user',
    component: InviteUserComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },


  {

    path: 'PreOnboarding',
    component: PreOnboardingComponent,
  },
  {
    path: 'candidate',

    component: CandidateDetailsComponent,
  },


  {
    path:'edit-candidate-details',
    component:EditCandidateDetailsComponent,
  },

  {
    path: 'preonboarding_complete',
    component: PreonboardingCompleteComponent

  },
  {
    path: 'test',
    component: ConstcityComponent

  },
  {
    path: 'preonboarding_complete1',
    component: PreonboardingCompleteNextpartComponent

  },
  {
    path: 'apply-leave',
    component: ApplyLeaveComponent

  },
 
  {
    path: 'contact-us',
    component: ContactUsComponent

  },
  {
    path: 'new-hire',
    component: NewHiresComponent

  },

  {
    path: 'pending-report',
    component: PendingReportComponent

  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'login-Onboarding',
    component: LoginOnboaringComponent
  },

  {
    path: 'add-timesheet',
    component: AddTimesheetComponent
  },
  {
    path: 'timesheet',
    component: TimesheetComponent
  },

  {
    path: 'timesheet/edit/:TimeSheetId',
    component: UpdateTimesheetComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'edit-projects/:id',
    component: EditProjectsComponent,
  },

  {
    path: 'exit-details',
    component: AddExitDetailsComponent,
  },
  
  {
    path: 'add-holiday',
    component: AddHolidayComponent
  },
  {
    path: 'add-leave',
    component: AddLeaveComponent
  },
  {
    path: 'configure-pay-period',
    component: ConfigurePayPeriodComponent
  },
  {
    path:'designation-details',
    component:DesignationDetailsComponent
  },
  {
    path:'designation',
    component:DesignationComponent
  },
  {
    path:'add-schedule',
    component:AddScheduleComponent
  },
  {
    path:'employee-registration',
    component:EmployeeRegistrationOnboardingComponent
  },
 
  {
    path:'designation/designation-details',
    component: DesignationDetailsComponent,
  },
  {
    path:'designation-details/designation',
    component: DesignationComponent,
  },
  {
    path:'edit-designation/:id',
    component: EditDesignationComponent,
  },

  {
    path:'department',
    component: DepartmentComponent,
  },


  {
    path: 'edit-department/:departmentId',
    component: EditDepartmentComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
