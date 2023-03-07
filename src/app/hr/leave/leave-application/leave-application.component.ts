import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getDate } from 'date-fns';
import { LeaveService } from '../leaveservice.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';


@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent implements OnInit {


  leaveForm = new FormGroup({
    employee_id: new FormControl('', [Validators.required]),
    employee_name: new FormControl('', [Validators.required]),
    leave_type: new FormControl('', [Validators.required]),
    date_from: new FormControl('', [Validators.required]),
    Days: new FormControl('', [Validators.required]),

  });



  all_leave: any;
  allapply: any;



  constructor(private LeaveService: LeaveService, private ngxService: NgxUiLoaderService, private router: Router) {

    this.LeaveService.Totalleave().subscribe((data: any) => {

      this.allapply = data;
      console.log(this.allapply);

    });

    this.LeaveService.getleave().subscribe((data) => {

      this.all_leave = data;


    });

  }
  ngOnInit(): void {

  }




  // deleteleave(employee_id: any) {
  //   this.ngxService.start();
  //   if (confirm("Are you sure to delete this Leave?")) {
  //     this.LeaveService.deleteleave(employee_id).subscribe((data) => {

  //       // alert('Leave Successfully Deleted.');
  //       window.location.reload();
  //       this.ngxService.stop();
  //     });
  //   }

  // }

  deleteleave(employee_id: any) {

    this.LeaveService.deleteleave(employee_id).subscribe(res => {
      console.log("Res", res);
      alert("Leave Successfully Deleted");
      setTimeout(() => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/leave-application']));
      }, 1000);
    }, (err) => {
      console.log("Err", err);
    })
  }

}















