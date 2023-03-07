import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/hr/services/dashboard.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent implements OnInit {

Addleave: any = FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private dashService: DashboardService, private router: Router) { }
  //Add user form actions
  get f() { return this.Addleave.controls; }

  ngOnInit(): void {
    this.Addleave = this.formBuilder.group({

      EmployeeId: ['', [Validators.required]],
      LeaveType: ['', [Validators.required]],
      TeamEmail: ['', [Validators.required, Validators.email]],
      DateFrom: ['', [Validators.required]],
      DateTo: ['', [Validators.required]],
      ReasonForLeave: ['', [Validators.required]],
    });
  }

  submitAll() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.Addleave.invalid) {
      return alert("Invalid Details");
    }
   
    //True if all the fields are filled
    if (this.submitted && this.Addleave.valid) {
      // alert("Great, You are logged in!!");
      console.log(this.Addleave.value)

      this.dashService.Addleave(this.Addleave.value).subscribe( result => {
        console.log('test-data', result);
        if (result.success) {
          console.log(result);
          console.log(result.message);
        }
        else {
          console.log("test error", result);        
        }
      });
    }
  }

  alertWithSuccess(){
    swal.fire("Thank You...","You Submitted Successfully","success")
  }

}
