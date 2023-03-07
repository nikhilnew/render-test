import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectsService } from "src/app/services/projects.service";
import { BrowserModule } from '@angular/platform-browser'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
 
  tmarr:any;
  tmp:any=[];
   tm:any
   arraytm:any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  data:any
a:any;
submitted = false;
  projectForm = new FormGroup({
    project_owner: new FormControl('',[Validators.required]),
    client: new FormControl('',[Validators.required]),
    project: new FormControl('',[Validators.required]),
    team_member: new FormControl('',[Validators.required]),
  });
  get p() {
    return this.projectForm.controls;
  }
  get project_owner() {
    return this.projectForm.get('project_owner');
  }
  get client() {
    return this.projectForm.get('client');
  }
  get project() {
    return this.projectForm.get('project');
  }
  get team_member() {
    return this.projectForm.get('team_member');
  }
  allProjects: any;
  allEmployees: any;

  constructor( private projectsService:ProjectsService) {

  this.projectsService.getEmployees().subscribe((data:any) => {
    //var res = data.sort((a,b)=> a.id-b.id)
    this.allEmployees = data;
    /*console.log("allEmployees", data);
    let index = 0;
    for ( var item of data ){
      console.log('item',item);
      this.allEmployees['team_member'] = item.team_member.split(',');
      index += index;
    }
    console.log('this.allEmployees',this.allEmployees);*/
  });

  this.projectsService.getProjects().subscribe((data) => {
    //var res = data.sort((a,b)=> a.id-b.id)
    this.allProjects = data;
    // console.log("getProjects", data);
  });

  }

  ngOnInit(): void {
 this.getData();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }
  
  getData(): void {
  
    this.projectsService.getEmployees().subscribe((data:any) =>  {
      for(let i of data) {
        this.tmp.push({ item_id: i.id, item_text: i.first_name +' '+i.last_name });
        
      }
       
      this.dropdownList = this.tmp;
      
    });

  }
  onItemSelect(item: any) {
    //  console.log(item);
  }
  onSelectAll(items: any) {
    // console.log(items);
  }

  getallproject(){
    this.projectsService.getProjects().subscribe((data) => {
      //var res = data.sort((a,b)=> a.id-b.id)
      this.allProjects = data;
      // console.log("getProjects", data);
    });
  }

  getEmployeeName(id:any){
    let empNames ='';
    let emp_ids:any;
    emp_ids = id.split(',').map(Number)
    let ifSingle:any;
    if(emp_ids.length > 1){
      ifSingle = true;
    } else {
      ifSingle = false;
    }
    // console.log('emp_ids',emp_ids);
    for ( var item of this.allEmployees ){
      if(emp_ids.indexOf(item.id) != -1){
          empNames += ' '+item.first_name +' '+ item.last_name +',';
      }
    }
    return empNames.slice(0, -1);
  }

  addProject(){
     

    this.submitted=true;
    // console.log("addProject", this.projectForm.value);
   
   
    if (this.submitted) {
      const { value, valid} =
      this.projectForm ;

  

      if(valid){
    let team = this.projectForm.value.team_member?.toString();
     
    let projectData = {
      project_owner : this.projectForm.value.project_owner,
      client : this.projectForm.value.client,
      project : this.projectForm.value.project,
      team_member : this.tmarr
    }

    
  
    this.projectsService.addProject(projectData).subscribe((data) => {
      // console.log("sended" + projectData);
      alert('Project Successfully Added.');
    this.resetProject();
      this.getallproject();
     
      // window.location.reload();
    });
      }}
  }
  resetProject(){
     this.projectForm.reset();
    this.submitted=false;
    this.projectForm = new FormGroup({
      project_owner: new FormControl('',[Validators.required]),
      client: new FormControl('',[Validators.required]),
      project: new FormControl('',[Validators.required]),
      team_member: new FormControl('',[Validators.required]),
    });
    // this.projectForm.get('project_owner')?.clearValidators();  
    // this.projectForm.get('client')?.clearValidators(); 
    // this.projectForm.get('project')?.clearValidators(); 
    // this.projectForm.get('team_member')?.clearValidators(); 
  }
//   seltm(e:any){
// console.log("hello",e.value);

//   }

  deleteProject(id:any){
    if(confirm("Are you sure to delete this project?")) {
      this.projectsService.deleteProject(id).subscribe((data) => {
        alert('Project Successfully Deleted.');
        window.location.reload();
      });
    }
  }
}
