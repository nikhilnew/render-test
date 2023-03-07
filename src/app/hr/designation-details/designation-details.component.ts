import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';


@Component({
  selector: 'app-designation-details',
  templateUrl: './designation-details.component.html',
  styleUrls: [ './designation-details.component.css']
})
export class DesignationDetailsComponent implements OnInit {

  DesignationDetails: any = FormGroup;
  submitted = false;
  Employee:any


  constructor(private formBuilder: FormBuilder, private dashService: DashboardService, private router: Router) {
      



  }
  //Add user form actions
  get f() { return this.DesignationDetails.controls; }

  ngOnInit(): void {
    this.DesignationDetails = this.formBuilder.group({

      designation_name: ['', [Validators.required]],
      mail_alias:  ['', [Validators.required, Validators.email]],

    });
  }



  submitt(data: any) {
    console.log('data holiday', this.DesignationDetails.value);
    this.submitted = true;
    // stop here if form is invalid
    if (this.DesignationDetails.invalid) {
      return alert("Invalid Details");
    }
    //True if all the fields are filled
    if (this.submitted && this.DesignationDetails.valid) {

      console.log('valid data', this.DesignationDetails.value)
      if(confirm("Designation Details added successfully")) {
      this.dashService.DesignationDetails(this.DesignationDetails.value).subscribe(result => {
   
        this.router.navigate(['designation']);
        console.log('test-data', result);
        if (result.success) {
          console.log(result);
          console.log(result.message);
          return alert("successfully added");      
        }
        else {
         
        }
      });


    }
    }
  }
  
  
 
  
}