import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/hr/services/dashboard.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-pending-report',
  templateUrl: './pending-report.component.html',
  styleUrls: ['./pending-report.component.css']
})
export class PendingReportComponent implements OnInit {

  // productForm: FormGroup;
  employeeID: any

  getpenrepo:any
  gpr:any
  selectedvalue:any
  empdetail:any
selAction = {Action:""}
  status =['Pending','On-Hold','Approved','Cancel']
selected=false;
  constructor(private dashServ: DashboardService) {

    this.dashServ.GetPReport().subscribe((data) => {
      this.getpenrepo = data;
      this.gpr = this.getpenrepo?.data
      console.log("getPR+++", data);
      console.log("getPR+++", this.gpr);

    });
    
   }

  //  goto(data: any){
  //   this.empdetail = data;
  //   this.employeeID = data.EmployeeId
  //   console.log("test ID + Action", data);
  //   console.log(this.employeeID);
    
  //  }

  


  goto(id:any,data:any){
    this.empdetail = data;
    // id = data.EmployeeId
    //let status = data
    console.log("data",data.value)
    this.selAction=data
    //console.log("click ....id",id);
   // console.log("check action",this.selAction);
   let status = {
    Action:data.value
   }
    this.dashServ.pendingreport(id,status).subscribe((result)=>{
      console.log("api--->",result);
  
window.location.reload();
    })
  }



  //  selectChangeHandler (event:any){
  //   this.selectedvalue = event.target.value;
  //   this.dashServ.sendBdayWish(event).subscribe((result)=>{
  //     console.log("api--->",result);
  //   })
  //    console.log("test data...................",this.selectedvalue)
  //  }

  //  userlogin(data:any){
  
  //   console.log("click",data);
  //   this.dashServ.sendBdayWish(data).subscribe((result)=>{
  //     console.log("api--->",result);
  

  //   })
  // }

  ngOnInit(): void {
  }

 

}
