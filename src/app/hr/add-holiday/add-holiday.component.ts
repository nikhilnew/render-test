import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/hr/services/dashboard.service';


@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.css']
})
export class AddHolidayComponent implements OnInit {

  Dep:any=[]


  data:any
  departmentList:any = [];
  selectedItems1:any = [];
  userSettings1 = {};

  deptar1:any;
  deptarray:any=[];
  deptstring:any;



  Addholiday: any = FormGroup;
  submitted = false;



  constructor(private formBuilder: FormBuilder, private dashService: DashboardService, private router: Router) {



  

  }
  //Add user form actions
  get f() { return this.Addholiday.controls; }

  ngOnInit(): void {
    this.getData()
    this.Addholiday = this.formBuilder.group({

      HolidayType: ['', [Validators.required]],
      Name: ['', [Validators.required]],
      Date: ['', [Validators.required]],
      ApplicableFor: ['', [Validators.required]],

      // Restricted: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      No_ofday_before_which_the_reminder_should_be_sent: ['', [Validators.required]],
      // Notify_Applicable_Employees: [''],
      // Reprocess_leave_applications_based_on_this_added_holiday: [''],
    });
  


  this.departmentList = [
    { item_id: 1, item_text: 'Mumbai' },
    { item_id: 2, item_text: 'Chennai' },
    { item_id: 3, item_text: 'Hyderabad' },
    { item_id: 4, item_text: 'Delhi' },
    { item_id: 5, item_text: 'Banglore' }
  ];

  this.userSettings1= {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  }

  getData():void{


  for(let i of this.departmentList){
    this.Dep.push({ item_id: i.id, item_text: i.item_text});
   }
   this.departmentList = this.Dep;
  }



onItemSelect(item: any) {
  console.log(item);
}
onSelectAll(items: any) {
  console.log(items);
}



  done(data: any) {

   
  

//department

    
    
    this.deptar1=this.Addholiday.value.ApplicableFor;
    console.log("1",this.deptar1);  
    this.deptarray=this.deptar1.map((dept:any)=>dept.item_text);
    console.log("print",this.deptarray);
    
    this.deptstring= this.deptarray.join(", ");
    console.log("dept",this.deptstring)



    this.submitted = true;
    
  
    if (this.submitted==true) {
  
    this.data=  {
      HolidayType:this.Addholiday.value.HolidayType,
      Name:this.Addholiday.value.Name ,
      Date: this.Addholiday.value.Date,
      ApplicableFor:  this.deptstring,
      // Restricted:this.Addholiday.value.Restricted ,
      Description:this.Addholiday.value.Description ,
      No_ofday_before_which_the_reminder_should_be_sent:this.Addholiday.value.No_ofday_before_which_the_reminder_should_be_sent ,
      // Notify_Applicable_Employees:this.Addholiday.value.Notify_Applicable_Employees ,
      // Reprocess_leave_applications_based_on_this_added_holiday:this.Addholiday.value.Reprocess_leave_applications_based_on_this_added_holiday ,

      }

      console.log('valid data',   this.data)
      this.dashService.Addholiday(this.data).subscribe(result => {
        if (confirm("Holiday added successfully")) {
        console.log('test-data', result);
        if (result.success) {
          console.log(result);
          console.log(result.message);
        }
        else {
          console.log("test error", result);
        }
      }
      this.router.navigate(['holiday']);
      });

      
    }
  }







}
