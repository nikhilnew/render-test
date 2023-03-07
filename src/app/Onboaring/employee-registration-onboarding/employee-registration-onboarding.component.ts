import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import {ServicesService } from 'src/app/Onboaring/onboarding-services/services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-registration-onboarding',
  templateUrl: './employee-registration-onboarding.component.html',
  styleUrls: ['./employee-registration-onboarding.component.css']
})
export class EmployeeRegistrationOnboardingComponent implements OnInit {

 registerForm:any = FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private authService:ServicesService,private router: Router) { }
//Add user form actions
get f() { return this.registerForm.controls; }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      emp_name:['', [Validators.required]],
      emp_id:['', [Validators.required]],
      joining_date:['', [Validators.required]],
      designation:['', [Validators.required]],
      company_email_id: ['', [Validators.required, Validators.email,Validators.pattern('^.+@.+\..+$')]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      personal_email_id: ['', [Validators.required, Validators.email,Validators.pattern('^.+@.+\..+$')]],
      });
  }

inviteProcess(){
    
  this.submitted = true;
 // stop here if form is invalid
if (this.registerForm.invalid) {
  return  alert("Invalid Details");;

} 
//True if all the fields are filled
if(this.submitted && this.registerForm.valid)
{
 // alert("Great, You are logged in!!");
  console.log(this.registerForm.value)

  this.authService.onboarding_registeration(this.registerForm.value).subscribe(async result => {
  // console.log(this.registerForm.value);
    if(result.success) {
  console.log(result);
  console.log(result.message);
 
 
  }else{
    console.log(result);
    console.log (result.message);
   
  }
  });

  // this.router.navigateByUrl('login-Onboading');
 
}

}


}

 
  




