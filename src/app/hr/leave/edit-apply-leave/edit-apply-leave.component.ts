import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveService } from '../leaveservice.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-apply-leave',
  templateUrl: './edit-apply-leave.component.html',
  styleUrls: ['./edit-apply-leave.component.css']
})
export class EditApplyLeaveComponent implements OnInit {

  leaveData: any;
  //  allEmployees: any;
  allleave: any;
  employee_id: any;


  editApplyleave = new FormGroup({
    employee_id: new FormControl(''),
    leave_type: new FormControl(''),
    date_from: new FormControl(''),
    date_to: new FormControl(''),
    reporting_manager: new FormControl(''),
    email: new FormControl(''),
    additional_email: new FormControl(''),
    reason_for_leave: new FormControl(''),


  });

  constructor(private activatedRoute: ActivatedRoute, private applyLeaveService: LeaveService, private router: Router, private datepipe: DatePipe) {

    // this.applyLeaveService.getEmployees().subscribe((data) => {
    //   this.allEmployees = data;
    //   console.log("allEmployees", data);
    // });

    this.applyLeaveService.getleave().subscribe((data) => {
      this.allleave = data;
      console.log("allEmployees", data);
    });

    this.activatedRoute.paramMap.subscribe(x => {
      this.employee_id = x.get('employee_id');
      console.log(this.employee_id);
    });

    this.applyLeaveService.getById(this.employee_id).subscribe((data: any) => {
      this.leaveData = data[0];
      // let teams = this.leaveData.team_member.split(',').map(Number);
      this.editApplyleave.patchValue({
        'employee_id': this.leaveData.employee_id,
        'leave_type': this.leaveData.leave_type ,
        'date_from': this.datepipe.transform(this.leaveData.date_from, 'yyyy-MM-dd'),
        'date_to': this.datepipe.transform(this.leaveData.date_to, 'yyyy-MM-dd'),
        'reporting_manager': this.leaveData.reporting_manager,
        'email': this.leaveData.email,
        'additional_email': this.leaveData.additional_email,
        'reason_for_leave': this.leaveData.reason_for_leave,
      });
      console.log("leaveData", this.leaveData);
    });

    /*this.projectsService.getProjects().subscribe((data) => {
      this.leaveData = data;
      console.log("leaveData", data);
    });*/
  }

  ngOnInit(): void {
  }

  updateLeave() {
    console.log("addProject", this.editApplyleave
      .value);
    // let team = this.editApplyleave.value.team_member?.toString()
    let leaveData = {
      employee_id: this.editApplyleave.value.employee_id,
      leave_type: this.editApplyleave.value.leave_type,
      date_from: this.editApplyleave.value.date_from,
      date_to: this.editApplyleave.value.date_to,
      reporting_manager: this.editApplyleave.value.reporting_manager,
      email: this.editApplyleave.value.email,
      additional_email: this.editApplyleave.value.additional_email,
      reason_for_leave: this.editApplyleave.value.reason_for_leave,

    }
    this.applyLeaveService.updateApplyLeave(leaveData).subscribe((data) => {
      console.log("getApplyLeave", leaveData);
      alert("ApplyLeave Successfully Updated.");
      this.router.navigate(['leave-application']);
    });
  }

 


}


