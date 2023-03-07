import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from "src/app/services/projects.service";

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent implements OnInit {

  projectData: any;
  allEmployees: any;
  id:any;
  EditProjectForm = new FormGroup({
    project_owner: new FormControl(''),
    client: new FormControl(''),
    project: new FormControl(''),
    team_member: new FormControl(''),
  });

  constructor(private activatedRoute: ActivatedRoute, private projectsService:ProjectsService, private router: Router) {

    this.projectsService.getEmployees().subscribe((data) => {
      this.allEmployees = data;
      console.log("allEmployees", data);
    });

    this.activatedRoute.paramMap.subscribe(x => {
      this.id = x.get('id');
      console.log(this.id);
    });

    this.projectsService.getProject(this.id).subscribe((data:any) => {
      this.projectData = data[0];
      let teams = this.projectData.team_member.split(',').map(Number);
      this.EditProjectForm.patchValue({
        'project_owner': this.projectData.project_owner,
        'client': this.projectData.client,
        'project': this.projectData.project,
        'team_member': teams,
      });
      console.log("projectData", teams);
    });

    /*this.projectsService.getProjects().subscribe((data) => {
      this.projectData = data;
      console.log("projectData", data);
    });*/
  }

  ngOnInit(): void {
  }

  updateProject(){
    console.log("addProject", this.EditProjectForm.value);
    let team = this.EditProjectForm.value.team_member?.toString()
    let projectData = {
      project_id : this.id,
      project_owner : this.EditProjectForm.value.project_owner,
      client : this.EditProjectForm.value.client,
      project : this.EditProjectForm.value.project,
      team_member : team
    }
    this.projectsService.updateProject(projectData).subscribe((data) => {
      console.log("getProjects" , projectData);
      alert("Project Successfully Updated.");
      this.router.navigate(['projects']);
    });
  }

}
