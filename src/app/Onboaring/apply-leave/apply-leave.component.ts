import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthServiceService } from 'src/app/auth-service.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  //   constructor() { }

  //   ngOnInit(): void {
  //   }

  // }

  Applyleave: any = FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private dashService: DashboardService, private router: Router, private ngxService: NgxUiLoaderService,) { }
  //Add user form actions
  get f() { return this.Applyleave.controls; }

  ngOnInit(): void {
    this.Applyleave = this.formBuilder.group({

      employee_id: ['', [Validators.required]],
      leave_type: ['', [Validators.required]],
      date_from: ['', [Validators.required]],
      date_to: ['', [Validators.required]],
      reporting_manager: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      additional_email: ['', [Validators.required, Validators.email]],
      reason_for_leave: ['', [Validators.required]],

    });
  }

  submitData() {


    this.submitted = true;
    // stop here if form is invalid
    if (this.Applyleave.invalid) {
      return alert("Invalid Details");
    }

    //True if all the fields are filled
    if (this.submitted && this.Applyleave.valid) {
      // alert("Great, You are logged in!!");
      console.log(this.Applyleave.value)
      // this.ngxService.start();
      if (confirm("You have applied Leave successfully")) {
        this.dashService.ApplyLeave(this.Applyleave.value).subscribe(result => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigateByUrl('leave-tracker');
          });
          console.log('test-data', result);
          if (result.success) {
            console.log(result);
            console.log(result.message);
          }
          else {
            console.log("test error", result);

          }
          // window.location.reload();
          // this.ngxService.stop();
        });

        // alert("Great, You are Apple Leave successfully");
        // this.router.navigateByUrl('leave-tracker');

      }
    }
  }
}
