import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  open_Modal:boolean=false;


  
 
  generateTicket(){
    
if(1<=1){
        this.open_Modal = true; // <------
console.log("hii")
      }
      else {
        this.open_Modal = false;
     

        // do nothing
      }
    

  }
  
}
