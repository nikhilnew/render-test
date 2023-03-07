import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/hr/services/dashboard.service';
@Component({
  selector: 'app-configure-pay-period',
  templateUrl: './configure-pay-period.component.html',
  styleUrls: ['./configure-pay-period.component.css']
})
export class ConfigurePayPeriodComponent implements OnInit {
  ConfigurePayPeriod: any = FormGroup;
  submitted = false;
  Employee:any


  constructor(private formBuilder: FormBuilder, private dashService: DashboardService, private router: Router) {
      



  }
  //Add user form actions
  get f() { return this.ConfigurePayPeriod.controls; }

  ngOnInit(): void {
    this.ConfigurePayPeriod = this.formBuilder.group({

      PeriodName: ['', [Validators.required]],
      PayPeriodCycle: ['', [Validators.required]],

    });
  }



  bysubmit(data: any) {



 
    console.log('data holiday', this.ConfigurePayPeriod.value);
    this.submitted = true;
    // stop here if form is invalid
    if (this.ConfigurePayPeriod.invalid) {
      return alert("Invalid Details");
    }

    //True if all the fields are filled
    if (this.submitted && this.ConfigurePayPeriod.valid) {

      console.log('valid data', this.ConfigurePayPeriod.value)

      this.dashService.ConfigurePayPeriod(this.ConfigurePayPeriod.value).subscribe(result => {

        console.log('test-data', result);
        if (result.success) {
          console.log(result);
          console.log(result.message);
          return alert("successfully added");
        }
        else {
          // console.log("test error", result);
        }
      });

    }
  }


  
}