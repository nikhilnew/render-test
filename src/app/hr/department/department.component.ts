import { JsonPipe } from "@angular/common";
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { DashboardService } from "src/app/services/dashboard.service";
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  DashboardService: any;
  nik: any
  data: any;
  // dID:any
  a:any;
  submitted = false;
  DepartmentDetails = new FormGroup({



    departmentName: new FormControl('', [Validators.required]),
    MailAlias: new FormControl('', [Validators.required]),
    // status: new FormControl('', [Validators.required]),
    DepartmentLead: new FormControl('', [Validators.required]),
    ParentDepartment: new FormControl('', [Validators.required]),
    added_by: new FormControl('', [Validators.required]),
    added_time: new FormControl('', [Validators.required]),
    modified_by: new FormControl('', [Validators.required]),
    modified_time: new FormControl('', [Validators.required]),


  });



  alldata: any;
  //  allEmployees: any;  
  getpenrepo: any
  constructor(private dash: DashboardService, private ngxService: NgxUiLoaderService, private router: Router) { }
  ngOnInit(): void {
    this.getdetail();
  }
  getdetail() {
    this.dash.Department().subscribe((data: any): void => {
      this.alldata = data;

      this.getpenrepo = data;
      this.nik = data
      console.log("getPR+++", data);
      console.log("getdetail", this.nik);

    });

  }


  deleteDepart(j: any) {
    console.log(j);
    // this.ngxService.start();
    if (confirm("Are you sure to delete this Leave?")) {
      this.dash.deleteDepartment(j).subscribe(async (result) => {
        console.log('deleted successfully');
        setTimeout(() => { this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/department'])); }, 1000);
      });
      this.getdetail();
      // this.ngxService.stop();
    }
  }
//   getid(e:any){
//     this.dID=e.departmentId
// console.log(e.departmentId);

//   }

}

