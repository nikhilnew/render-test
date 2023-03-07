import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getDate } from 'date-fns';
import { LeaveService } from '../leaveservice.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';


@Component({
  selector: 'app-leave-tracker',
  templateUrl: './leave-tracker.component.html',
  styleUrls: ['./leave-tracker.component.css']
})
export class LeaveTrackerComponent implements OnInit {


  all_leave: any;
  allEmployees: any;

 
  constructor(private LeaveService: LeaveService, private ngxService: NgxUiLoaderService, private router: Router) {

    // this.LeaveService.Totalleave().subscribe((data: any) => {

    //   this.allapply = data;
    //   console.log(this.allapply);

    // });

    this.LeaveService.getleave().subscribe((data) => {

      this.all_leave = data;


    });

  }
  ngOnInit(): void {

  }
}