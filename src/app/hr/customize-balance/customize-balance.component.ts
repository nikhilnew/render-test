import { Component, OnInit } from '@angular/core';
import { DashboardService } from "src/app/services/dashboard.service";

@Component({
  selector: 'app-customize-balance',
  templateUrl: './customize-balance.component.html',
  styleUrls: ['./customize-balance.component.css']
})
export class CustomizeBalanceComponent implements OnInit {
  cust:any
  i:any
  a:any
  
  constructor(private dashServ:DashboardService) { }

  ngOnInit(): void { 
    
    
    this.dashServ.customize().subscribe((data:any) => {
    this.cust=data;
    console.log("hmm",this.cust)
    // console.log(this.cust.result)
    // this.a=this.cust.result;

  });

  // this.dashServ.customize().subscribe((data:any) => {
  //   this.cust=data;
  //   console.log(this.cust)
  //   console.log(this.cust?.result)
  //   this.a=this.cust?.result;
  // });

  }
  
}
