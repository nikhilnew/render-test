import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from 'src/app/Pre-Onboarding/login/login.component';
import { DashboardService } from "src/app/services/dashboard.service";
@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  nik:any
  departData: any;
  allEmployees: any;
  departId:any;
  EditDepartmentForm = new FormGroup({
    // departmentId:new FormControl(''),
    departmentName: new FormControl(''),
    MailAlias: new FormControl(''),
    DepartmentLead: new FormControl(''),
    ParentDepartment: new FormControl(''),
  });
  constructor(private activatedRoute: ActivatedRoute, private dashService:DashboardService, private router: Router) {

    this.dashService.Department().subscribe((data) => {
      this.allEmployees = data;
      // console.log("allEmployees", data);
    });

    this.activatedRoute.paramMap.subscribe(x => {
      this.departId = x.get('departmentId');
      console.log("x",x);
      console.log("x",x.get('departmentId'));
      
      console.log("..........id",this.departId);
    });
    this.dashService.Department().subscribe((data:any) => {  
      console.log(data);   
      // this.departData = data;
      console.log("arr length",data.length);
      let n=data.length;
      let limit=1;
     
      for(let i in data){
        if(limit<=n && data[i].departmentId==this.departId){
        console.log("check data",data[i].departmentId);  
        this.departData = data[i];
        }   
        limit++;
      }
    this.EditDepartmentForm.patchValue({
      // 'departmentId': this.departId,   
      'departmentName': this.departData.departmentName,
      'MailAlias': this.departData.MailAlias,  
      'DepartmentLead':this.departData.DepartmentLead,
      'ParentDepartment':this.departData.ParentDepartment,
    });
     
  });

}



  ngOnInit(): void {
  }

  updateDepartment(){

    console.log("adddepart", this.EditDepartmentForm.value);

    let departData = {
      departmentId : this.departId,
      
      departmentName : this.EditDepartmentForm.value.departmentName,
      MailAlias : this.EditDepartmentForm.value.MailAlias,
      DepartmentLead: this.EditDepartmentForm.value.DepartmentLead,
      ParentDepartment: this.EditDepartmentForm.value.ParentDepartment,
    }
    console.log("updating",departData);
    
    this.dashService.updateDepartment(departData).subscribe((data) => {
      console.log("getdepart" , departData);
      alert("Department Successfully Updated.");
      this.router.navigate(['department']);
    });
  }

}
