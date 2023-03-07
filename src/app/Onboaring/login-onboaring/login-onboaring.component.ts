import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import {ServicesService } from 'src/app/Onboaring/onboarding-services/services.service';
import { Router,ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-login-onboaring',
  templateUrl: './login-onboaring.component.html',
  
  styleUrls: ['./login-onboaring.component.css','../../../assets/dist/css/admin.min.css', '../../../assets/dist/css/style.css'],

})
export class LoginOnboaringComponent implements OnInit {
  local_storage:any;
  employeeName:any;
 obj:any;
  finalObj:any={}; 
  // constructor(private authService:AuthServiceService) { }
  //Form Validables 
registerForm:any = FormGroup;
submitted = false;
constructor( private formBuilder: FormBuilder,private authService:ServicesService,private router: Router,private route:ActivatedRoute,
  private ngxService: NgxUiLoaderService,){}
//Add user form actions
get f() { return this.registerForm.controls; }

  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
      company_email_id: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(4)]]
    });
  }
///...................
loginProcess(){
    
  this.submitted = true;
 // stop here if form is invalid
if (this.registerForm.invalid) {
  return  alert("Invalid Email or password");;

} 
//True if all the fields are filled
if(this.submitted && this.registerForm.valid)
{
 // alert("Great, You are logged in!!");
  console.log(this.registerForm.value)
 this.ngxService.start();
  this.authService.onboarding_login(this.registerForm.value).subscribe(async result => {
    this.ngxService.stop();
  // console.log(this.registerForm.value);
    if(result.success) {
      
  console.log(result);
  console.log(result.message);
  this.obj = result.success
  console.log(this.obj);

// for(let i=0;i<this.obj.length;i++){
//   Object.assign(this.finalObj,this.obj[i]);
// }
  
// console.log("convertd array of objects to single object",this.finalObj)
sessionStorage.setItem('local_storage',JSON.stringify(this.obj))             //send


  for(const i in this.obj)
  {
      var a=this.obj.emp_name
      var b=this.obj.company_email_id
      var c=this.obj.emp_id
      this.employeeName=a;

    
 console.log( a,b,c);
    }
  
  // alert("Great, You are logged in successfully");
  // this.router.navigateByUrl('PreOnboarding',this.a);
  // console.log( this.a,this.b);
  // let data=this.a+" "+this.b
  let data = {a,b,c}
  
  // let DEmail=this.c;
  // console.log(data);
  // console.log(DEmail);
  
  // this.router.navigate(['/dashboard'],{queryParams: {data:btoa(JSON.stringify(data))}})    //send
  this.router.navigate(['/dashboard']);

  }else{
    console.log(result);
    console.log (result.message);
    alert("Invalid Email or password");
  }
  });
 
}

}

}