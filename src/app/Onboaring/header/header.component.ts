import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  employeeName:any
  data:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){

    this.data=JSON.parse(sessionStorage.getItem('local_storage')|| "[]");    //recieve from login-onboarding
   
    // this.employeeName=this.data.emp_name;
    for(const i in this.data)
    {
        var a=this.data[i].emp_name
        var b=this.data[i].company_email_id
        var c=this.data[i].emp_id
        this.employeeName=a;
      }
    console.log("hii", this.employeeName);
   
    console.log("hiiiiiiiiiiiiii",this.data);

 
  
    
  }
 
logout(){
  sessionStorage.clear();
  this.router.navigate(['/login-Onboading']);
}

}
