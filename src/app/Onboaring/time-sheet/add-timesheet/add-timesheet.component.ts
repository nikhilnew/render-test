import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { TimesheetService } from '../services/timesheet.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-timesheet',
  templateUrl: './add-timesheet.component.html',
  styleUrls: ['./add-timesheet.component.css']
})
export class AddTimesheetComponent implements OnInit {

  DepartmentDetails: any = FormGroup;

  submitted = false;



  constructor(private formBuilder: FormBuilder, private dashService: TimesheetService, private router: Router) { }

  //Add user form actions

  get f() { return this.DepartmentDetails.controls; }



  ngOnInit(): void {

    this.DepartmentDetails = this.formBuilder.group({



      emp_id: ['', [Validators.required]],

      emp_name:  ['', [Validators.required]],

      joining_date: ['', [Validators.required]],

      location: ['', [Validators.required]],

      designation: ['', [Validators.required]],

      company_email_id: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required]],

      personal_email_id: ['', [Validators.required, Validators.email]],



    });

  }



  submitData() {




    this.submitted = true;

    // stop here if form is invalid

    if (this.DepartmentDetails.invalid) {

      return alert("Invalid Details");

    }



    //True if all the fields are filled

    if (this.submitted && this.DepartmentDetails.valid) {



      console.log(this.DepartmentDetails.value)


      if (confirm("Timesheet Details added successfully")) {
        this.dashService.pstTimesheet(this.DepartmentDetails.value).subscribe(result => {

          console.log('test-data', result);
          this.router.navigate(['timesheet']);
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


  }


  exit() {
    this.submitData();
    if (confirm("Department Details added successfully")) {
      location.reload();
    }
  }
}


