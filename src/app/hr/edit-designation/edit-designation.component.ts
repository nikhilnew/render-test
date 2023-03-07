import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from "src/app/services/dashboard.service";
@Component({
  selector: 'app-edit-designation',
  templateUrl: './edit-designation.component.html',
  styleUrls: ['./edit-designation.component.css']
})
export class EditDesignationComponent implements OnInit {
  nik:any
  moddalValues:any
  departData: any;
  allEmployees: any;
  departId:any;
  EditDesignationForm = new FormGroup({
    // id:new FormControl(''),
    designation_name: new FormControl(''),
    mail_alias: new FormControl(''),
  });
  constructor(private activatedRoute: ActivatedRoute, private dashService:DashboardService, private router: Router) {

    this.dashService.Designations().subscribe((data) => {
      this.allEmployees = data;
      console.log("allEmployees", data);
    });

    this.activatedRoute.paramMap.subscribe(x => {
      this.departId = x.get('id');
      console.log("x",x);
      console.log("x",x.get('id'));
      
      console.log("..........idk",this.departId);
    });
    this.dashService.Designations().subscribe((data:any) => {     
      // this.departData = data[0];
      // for(let i in data){
      //   console.log("check data",data.id);
        
      // }
      console.log("arr length",data.length);
      let n=data.length;
      let limit=1;
     

      for(let i in data){
        if(limit<=n && data[i].id==this.departId){
        console.log("check data",data[i].id);  
        this.departData = data[i];
        }   
        limit++;
      }
    this.EditDesignationForm.patchValue({
      // 'id': this.departId,   
      'designation_name': this.departData.designation_name,
      'mail_alias': this.departData.mail_alias,  
     
    });
     
  });

}



  ngOnInit(): void {
  }

  updateDesignation(){

    console.log("adddepart", this.EditDesignationForm.value);

    let departData = {
      id : this.departId,
      designation_name : this.EditDesignationForm.value.designation_name,
      mail_alias : this.EditDesignationForm.value.mail_alias,
      
    }
    this.dashService.updateDesignations(departData).subscribe((data) => {
      console.log("getdepart" , departData);
      alert("Designation Successfully Updated.");
      this.router.navigate(['designation']);
    });
  }

  goto(data: any) {
    this.moddalValues = data;
    console.log("test", data);
  }
}

