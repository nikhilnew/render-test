import { JsonPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { HostListener } from "@angular/core";
import { DashboardService } from "src/app/services/dashboard.service";
import { ActivatedRoute } from "@angular/router";
import { NgModule } from '@angular/core';
import { Router } from "express";
import { switchAll } from "rxjs";
import swal from 'sweetalert2';
import { timer } from 'rxjs';
import { TimesheetService } from '../time-sheet/services/timesheet.service';

// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {

  leaves1: any = null;
  birthday: any;
  newHire: any;
  moddalValues: any;
  bdayWsModel:any;
  knCenter: any;
  apFrReq: any;
  upHday: any;
  Tsheet: any;
  announce: any;
  timesheetemp:any;
  startStopFlag : boolean =false;
  editMode: boolean = false;
  date: any;
  redblue = "btn btn-info btn-sm";

  startTimer: boolean = false;

  timer = 0; // seconds
  intervalId : any = 0;
  ticks =0;
  currentDate = new Date();

  constructor(private dashServ: DashboardService,private router:ActivatedRoute,private timesheetService : TimesheetService) {
    
    this.dashServ.leaves().subscribe((data) => {
      // this.leaves=totalLeav;
      console.log("check...." + data);
      this.leaves1 = data;
    });

    this.dashServ.birthday().subscribe((data) => {
      console.log("check....", data);
      this.birthday = data;
      console.log(this.birthday);
    });

    this.dashServ.newHire().subscribe((data) => {
      this.newHire = data;
      console.log("new hire....", data);
    });

    this.dashServ.knowledgecenter().subscribe((item:any) => {
      // console.log('item..................',JSON.stringify(item?.data));
      
      this.knCenter = item?.data;
       console.log("knowledge center",this.knCenter)
    });

    this.dashServ.approvForReq(8811).subscribe((data) => {
      this.apFrReq = data;
      console.log("apFrReq",this.apFrReq)
    });

    this.dashServ.UpcmgHoliday().subscribe((data) => {
      this.upHday = data;
      console.log("holiday", data);
    });

   

    this.dashServ.timesheetbyempid(55).subscribe((data) => {
      this.timesheetemp = data;
      console.log("timesheetemp",this.timesheetemp)
    });


    this.dashServ.announcement().subscribe((data) => {
      this.announce = data;
      console.log("announcement", data);
    });

  }

  sndBdayWs(data:any){
    this.bdayWsModel = data;
    // this.name = data.name;

    console.log("bday user id ---->",data);
    }

    userlogin(data:any){
  
      console.log("click",data);
      this.dashServ.sendBdayWish(data).subscribe((result)=>{
        console.log("api--->",result);
  
  
      })
    }
  
   
    alertWithSuccess(){
      swal.fire("Thank You...","You Submitted Successfully","success")
      // alert("Your Email has been sent Successfully !!");
      
  


    }
   
    

  goto(data: any) {
    this.moddalValues = data;
    console.log("test", data);
  }


  start() {
    this.startStopFlag =! this.startStopFlag;
    if (!this.intervalId){
      this.intervalId = setInterval(() => this.timer++, 1000);
      this.editMode=true;
      
      this.redblue = "btn btn-danger btn-sm"
    }
    else {
      clearInterval(this.intervalId);
      this.intervalId = 0;
      this.editMode=false;
      this.redblue = "btn btn-info btn-sm"
    }
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = 0;
    }
  }

  get hours() {
    return Math.floor(this.timer / 3600);
  }

  get minutes() {
    return Math.floor(this.timer / 60) % 60;
  }

  get seconds() {
    return this.timer % 60;
  }

  ngOnInit() {
    this.startStopFlag = true;
    let timer$ = timer(2000,1000);
    timer$.subscribe(t=>this.ticks = t);


    

  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

}



