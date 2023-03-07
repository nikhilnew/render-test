
import { Component, OnInit } from '@angular/core';
import { DashboardService } from "src/app/services/dashboard.service";
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  DashboardService: any;
  nik:any
  data: any;
  a: any;
  submitted = false;
  Designation = new FormGroup({

    designation_name: new FormControl('', [Validators.required]),
    mail_alias: new FormControl('', [Validators.required]),
    added_by: new FormControl('', [Validators.required]),
    added_time: new FormControl('', [Validators.required]),
    modified_by: new FormControl('', [Validators.required]),
    modified_time: new FormControl('', [Validators.required]),
  });
   alldata: any; 
  getpenrepo:any
  constructor(private dash:DashboardService,private router:Router){     } 
          ngOnInit(): void {           
            this.getdetail();
          }
    getdetail(){
            this.dash.Designations().subscribe((data: any): void => {
              this.alldata = data; 
              this.getpenrepo = data;
              this.nik = data
              console.log("getPR+++", data);
              console.log("getdetail", this.nik);            
              }); 
          }
          deleteDesig(j: any) {
            console.log(j);
           
             if (confirm("Are you sure to delete?")) {
            this.dash.deleteDesignation(j).subscribe(async (result) => {
              setTimeout(() => { this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/designation'])); }, 1000);           
             console.log('deleted successfully');
              this.getdetail();
            });
          }
          }
        }