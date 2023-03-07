import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';

// import { AuthServiceService } from 'src/app/auth-service.service';



@Component({

  selector: 'app-department-details',

  templateUrl: './department-details.component.html',

  styleUrls: ['./department-details.component.css']

})

export class DepartmentDetailsComponent implements OnInit {



  DepartmentDetails: any = FormGroup;

  submitted = false;



  constructor(private formBuilder: FormBuilder, private dashService: DashboardService, private router: Router) { }

  //Add user form actions

  get f() { return this.DepartmentDetails.controls; }



  ngOnInit(): void {

    this.DepartmentDetails = this.formBuilder.group({



      departmentName: ['', [Validators.required]],

      MailAlias:  ['', [Validators.required, Validators.email]],

      DepartmentLead: ['', [Validators.required]],

      ParentDepartment: ['', [Validators.required]],



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


      if (confirm("Department Details added successfully")) {
        this.dashService.DepartmentDetails(this.DepartmentDetails.value).subscribe(result => {

          console.log('test-data', result);
          this.router.navigate(['department']);
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


