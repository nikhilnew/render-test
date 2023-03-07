
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from "src/app/services/dashboard.service";


@Component({
  selector: 'app-add-customize-balance',
  templateUrl: './add-customize-balance.component.html',
  styleUrls: ['./add-customize-balance.component.css']
})
export class AddCustomizeBalanceComponent implements OnInit {

  addcustomize: any = FormGroup;
  submitted = false;
  Employee:any
  nik:any
  
  constructor(private formBuilder: FormBuilder, private dashService: DashboardService, private router: Router) {
      
  }
  //Add user form actions
  get f() { return this.addcustomize.controls; }

  ngOnInit(): void {
    this.getdata()
  
    this.addcustomize = this.formBuilder.group({
      // employeeId : ['', [Validators.required]],
      Employee : ['', [Validators.required]],
      leavetype : ['', [Validators.required]],
      date : ['', [Validators.required]],
      existingbalance : ['', [Validators.required]],
      newbalance : ['', [Validators.required]],
      reason : ['', [Validators.required]],
      paternityleave: ['', [Validators.required]],
     
    });
  }

getdata(){
  this.dashService.getEmployees().subscribe((data:any) => {
    this.nik=data;
    console.log("hmm",this.nik)
  })
  

 

}


  submitt() {



    this.submitted = true;
    // stop here if form is invalid

   

    if (this.addcustomize.invalid) {
      return alert("Invalid Details");
    }

    //True if all the fields are filled

    if (this.submitted && this.addcustomize.valid) {
      console.log(this.addcustomize.value)
      if (confirm("Customize balance added successfully")) {
        this.dashService.AddCustomize(this.addcustomize.value).subscribe(result => {

          console.log('test-data', result);
        
          if (result.success) {

            console.log(result);

            console.log(result.message);
          }

          else {

            console.log("test error", result);

          }
          this.router.navigate(['customize-balance']);

        });
      }
    }
  } 
}