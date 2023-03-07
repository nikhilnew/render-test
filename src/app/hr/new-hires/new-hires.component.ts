import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/hr/services/dashboard.service';
import { JsonPipe } from "@angular/common";

@Component({
  selector: 'app-new-hires',
  templateUrl: './new-hires.component.html',
  styleUrls: ['./new-hires.component.css']
})
export class NewHiresComponent implements OnInit {
  newHire:any
  i:any
  a:any
  constructor(private dashServ: DashboardService) { }

  ngOnInit(): void { 
    
    
    this.dashServ.newHire().subscribe((data:any) => {
    this.newHire=data;
    console.log(this.newHire)
    console.log(this.newHire?.result)
    this.a=this.newHire?.result;

  });



  }
  
}
