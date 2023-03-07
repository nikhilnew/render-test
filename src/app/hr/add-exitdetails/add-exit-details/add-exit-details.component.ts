import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/hr/add-exitdetails/services/services.service';


@Component({
  selector: 'app-add-exit-details',
  templateUrl: './add-exit-details.component.html',
  styleUrls: ['./add-exit-details.component.css']
})
export class AddExitDetailsComponent implements OnInit {

  AddExitDetails : any = FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: ServicesService, private router: Router) { }
  //Add user form actions
  get f() { return this.AddExitDetails.controls; }

  ngOnInit(): void {
    this.AddExitDetails = this.formBuilder.group({
            Employee_id: ['', [Validators.required]],
            Separation_Date: ['', [Validators.required]],
            Interviewer: ['', [Validators.required]],
            Reason_for_Leaving: ['', [Validators.required]],
            Working_for_this_organization: ['', [Validators.required]],
            What_did_you_like_the_most_of_the_organization: ['', [Validators.required]],
            Think_the_organization_do_to_improve_staff_welfare:['', [Validators.required]],
            Anything_you_wish_to_share_with_us: ['', [Validators.required]],
            Company_Vechile_handed_in: ['', [Validators.required]],
            All_equipments_handed_in: ['', [Validators.required]],
            All_library_books_submitted: ['', [Validators.required]],
            Security: ['', [Validators.required]],
            Exit_Interview_conducted: ['', [Validators.required]],
            Notice_period_followed:['', [Validators.required]],
            Resignation_letter_submitted: ['', [Validators.required]],
            Supervisor_clearance:  ['', [Validators.required]],

    });
  }

  submitData() {


    this.submitted = true;
    // stop here if form is invalid
    if (this.AddExitDetails.invalid) {
      return alert("Invalid Details");
    }

    //True if all the fields are filled
    if (this.submitted && this.AddExitDetails.valid) {
      
      console.log(this.AddExitDetails.value)

      this.authService.AddExitDetails(this.AddExitDetails.value).subscribe(result => {
        console.log('test-data', result);
        if (result.success) {
          console.log(result);
          console.log(result.message);
        }
        else {
          console.log("test error", result);

        }
      });

     
      this.router.navigateByUrl('AddExitDetails');

    }

  }


}




// export class AddExitDetailsComponent implements OnInit {

// AddExitDetails : any = FormGroup;
//   submitted = false;

//   constructor(private formBuilder: FormBuilder, private authService: AuthServiceService, private router: Router) { }
//   //Add user form actions
//   get f() { return this.AddExitDetails.controls; }

//   ngOnInit(): void {
//     this.AddExitDetails = this.formBuilder.group({

//       //   employee_id: ['', [Validators.required]],
//       //   leave_type: ['', [Validators.required]],
//       //   date_from: ['', [Validators.required]],
//       //   date_to: ['', [Validators.required]],
//       //   reporting_manager: ['', [Validators.required]],
//       // email: ['', [Validators.required, Validators.email]],
//       // additional_email: ['', [Validators.required, Validators.email]],
//       // reason_for_leave: ['', [Validators.required]],

//       Employee_id: ['', [Validators.required]],
//       Separation_Date: ['', [Validators.required]],
//       Interviewer: ['', [Validators.required]],
//       Reason_for_Leaving: ['', [Validators.required]],
//       Working_for_this_organization: ['', [Validators.required]],
//       What_did_you_like_the_most_of_the_organization: ['', [Validators.required]],
//       Think_the_organization_do_to_improve_staff_welfare:['', [Validators.required]],
//       Anything_you_wish_to_share_with_us: ['', [Validators.required]],
//       Company_Vechile_handed_in: ['', [Validators.required]],
//       All_equipments_handed_in: ['', [Validators.required]],
//       All_library_books_submitted: ['', [Validators.required]],
//       Security: ['', [Validators.required]],
//       Exit_Interview_conducted: ['', [Validators.required]],
//       Notice_period_followed:['', [Validators.required]],
//       Resignation_letter_submitted: ['', [Validators.required]],
//       Supervisor_clearance:  ['', [Validators.required]],

//     });
//   }

//   submitData() {


//     this.submitted = true;
//     // stop here if form is invalid
//     if (this.AddExitDetails.invalid) {
//       return alert("Invalid Details");
//     }
    
//     //True if all the fields are filled
//     if (this.submitted && this.AddExitDetails.valid) {
//       // alert("Great, You are logged in!!");
//       console.log(this.AddExitDetails.value)

//       this.authService.AddExitDetails().subscribe( result => {
//         console.log('test-data', result);
//         if (result.success) {
//           console.log(result);
//           console.log(result.message);
//         }
//         else {
//           console.log("test error", result);
         
//         }
//       });

//       //alert("Great, You are Apple Leave successfully");
//       this.router.navigateByUrl('add-exit-details');

//     }

//   }
//   // this.AddExitDetails.value

// }
