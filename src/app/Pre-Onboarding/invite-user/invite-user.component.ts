import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invite-user',
  templateUrl: './invite-user.component.html',
  styleUrls: ['./invite-user.component.css','../../../assets/css/admin.min.css', '../../../assets/css/style.css']
})

export class InviteUserComponent implements OnInit {

  registerForm:any = FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private authService:AuthServiceService,private router: Router) { }
//Add user form actions
get f() { return this.registerForm.controls; }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      FirstName:['', [Validators.required]],
      LastName:['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email,Validators.pattern('^.+@.+\..+$')]],
      Password: ['', [Validators.required,Validators.minLength(6)]]
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

  this.authService.InviteUser(this.registerForm.value).subscribe(async result => {
  // console.log(this.registerForm.value);
    if(result.success) {
  console.log(result);
  console.log(result.message);
 
 
  }else{
    console.log(result);
    console.log (result.message);
   
  }
  });
  // alert("Great, You are registered successfully");
  this.router.navigateByUrl('login');
 
}

}


}

 
  




