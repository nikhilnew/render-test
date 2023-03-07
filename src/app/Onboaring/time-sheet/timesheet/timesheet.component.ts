import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { TimesheetService } from '../services/timesheet.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LoginComponent } from 'src/app/Pre-Onboarding/login/login.component';
import { LoginOnboaringComponent } from '../../login-onboaring/login-onboaring.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  
  attachmentForm:any
  selectedattach:any;
  notesForm:any
  fetchAttachment:any
  selectedattachfile:any
  attachOptions:any
  file!: File;
  loading: boolean = false; //flag variable
  attachmentValid:boolean=false;
  private apiUrl = environment.apiUrl;
  fetchNotes: any;
  editNotesId: any;
  noteValid:boolean=false;




  searched:any;
  getemployee:any;
  alldocument: any;
  searchText1: any;
  // allapply: any;
  Documentid: any;
  modulList: any; Document: any;
  Docname: any = []
  title = 'angular13';
  searchText = "";
  listOfContacts: any;
  nameByid:any
  findByid:any
  email1: any;

darray:any;
taskName :any;
  time: any;
  timesheetData: any;
  timesheetData1: any
  item: any
  startStopFlag: boolean = false;
  Task: any;
  date: any;
  clientName: any;
  projectName: any;
  startTimer: boolean = false;
  projectData: any;
  timer = 0; // seconds
  intervalId: any = 0;
  editMode: boolean = false;

  ticks = 0;
  currentDate = new Date();
  totalWorkingHrs: any;
GetFiltered:any;
  /////
  nik: any
  data: any;
  a: any;
  submitted = false;
  Timesheet = new FormGroup({

    Date: new FormControl('', [Validators.required]),
    
    Clients: new FormControl('', [Validators.required]),
    Project: new FormControl('', [Validators.required]),

  });


  Timesheet1 = new FormGroup({
    project_name: new FormControl('', [Validators.required]),
    client_name: new FormControl('', [Validators.required]),
   
  });

  alldata: any;
  getpenrepo: any
  activeTab: any;

  /////

  constructor(
    private timesheetService: TimesheetService, 
    private router: Router,private formBuilder: FormBuilder,
    private ngxService: NgxUiLoaderService,
    private authService: AuthServiceService,
    private httpClient: HttpClient,
    )
    { 
    this.switchsummary('pills-summary')

    this.timesheetService.getTimesheet().subscribe((data) => {
    
    this.Document = data;
    this.listOfContacts = data;
  
  });
  }
  



  get hours() {
      return Math.floor(this.timer / 3600)
    }

  get minutes() {
      return Math.floor(this.timer / 60) % 60;
    }

  get seconds() {
      return this.timer % 60;
    }

    start() {
      this.startStopFlag = !this.startStopFlag;

      if (!this.intervalId) {
        this.intervalId = setInterval(() => this.timer++, 1000);
      }
      else {
        clearInterval(this.intervalId);
        this.intervalId = 0;
      }
    }
    stop() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = 0;
      }
    }
    ngOnInit(): void {

      this.startStopFlag = true;
      let timer$ = timer(2000, 1000);
      timer$.subscribe(t => this.ticks = t);
      this.getTimesheetData();
      this.date = new Date().toISOString().substring(0, 10);
      this.getAllProjectsData();
      this.getTotalHours();

      /////////
      this.getdetail();
      
      this.switchsummary(this.activeTab)
      /////


      this.notesForm = this.formBuilder.group({
        add_notes: ['', [Validators.required]],
        email: [this.data.c],
      });
  
      //........................attachment
      this.attachmentForm = this.formBuilder.group({
        select: ['', [Validators.required]],
        profile: ['', [Validators.required]],
        email: [this.data.c],
        fileSource: ['', [Validators.required]],
      });
    

    }

    get n() {
      return this.notesForm.controls;
    }
    get A() {
      return this.attachmentForm.controls;
    }
  

    getTimesheetData() {
      this.timesheetService.getTimesheetById().subscribe((data) => {
        this.timesheetData = data;
      });
    }


    // getTimesheetData() {
    //   this.timesheetService.getTimesheetById(55).subscribe(res => {
    //     console.log("Res", res);
    //     this.timesheetData = res;
    //     console.log("timesheetData",this.timesheetData);
        

    //   }, (err) => {
    //     console.log("Error", err);
    //   })
    // }

    getAllProjectsData() {
      this.timesheetService.getAllProjects().subscribe((data) => {
        this.projectData = data;
      });
    }

    projectChanged(evt: any) {
      console.log("Evt", evt.target.value);
      this.projectName = evt.target.value;
    }

    clientChanged(evt: any) {
      console.log("Evt1", evt.target.value);
      this.clientName = evt.target.value;
    }

    taskChanged(evt: any) {
      console.log("Evt1",evt.target.value);
      this.taskName = evt.target.value;
      console.log("taskName",this.taskName);
    }

    getHours(secs: any) {
      var sec_num = parseInt(secs, 10);
      var hours = Math.floor(sec_num / 3600)
      var minutes = Math.floor(sec_num / 60) % 60
      var seconds = sec_num % 60;

      return hours + ':' + minutes + ':' + seconds;
    }

    createTimeSheet() {

      if (this.clientName == "" || this.clientName == undefined) {
        alert("Please select Client");
        return;
      }
      else if (this.projectName == "" || this.projectName == undefined) {
        alert("Please select Project");
        return;
      }
      else if ( this.taskName== "" ||  this.taskName== undefined) {
        alert("Please Enter Task");
        return;
      }

      let total = this.hours * 3600 + this.minutes * 60 + this.seconds;

      if (total == 0) {
        alert("Please Start the  timer");
        return;
      }

      let body = {
        "employeeId": this.findByid,
        "Date": this.date,
        "Clients": this.clientName,
        "Project": this.projectName,
        "Task":    this.taskName,
        "WorkingHours": total,
        "CompanyID": "108"
      }
console.log("body",body);

      this.timesheetService.createTimesheet(body).subscribe(res => {
        console.log("Res", res);
        alert('Timesheet added successfully');
        setTimeout(() => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/timesheet/']));
        }, 0);

        this.clientName = "";
        this.projectName = "";
        this.taskName= "";
        // this.router.navigate(['/timesheet']);
      }, (err) => {
        console.log("Error", err);
      })
    }

    checkTimeSheet() {

      if (this.clientName == "" || this.clientName == undefined) {
        alert("Please select Client");
        return;
      }
      else if (this.projectName == "" || this.projectName == undefined) {
        alert("Please select Project");
        return;
      }
      else if ( this.taskName== "" || this.taskName== undefined) {
        alert("Please Enter Task");
        return;
      }
      else this.start();
    }

    editTimesheet(data: any) {
      console.log("data.", data);

      console.log("id",data.emp_id,"name",data.emp_name);
      
      // this.findByid = data.emp_id
      // this.nameByid = data.emp_name
console.log("finding...............",this.findByid,this.nameByid);
this.timesheetService.getTimesheetById().subscribe(res => {
  console.log("Res", res);
  this.timesheetData1 = res;
  console.log("timesheetData",this.timesheetData1);
  
})
      this.router.navigate(['timesheet/edit/', data]);
    }
    updateTimesheet(id: any) {
      console.log("Id", id);
      let total = this.hours * 3600 + this.minutes * 60 + this.seconds;
      let body = {
        "employeeId": "",
        "Date": this.date,
        "Clients": this.clientName,
        "Project": this.projectName,
        "Task": this.taskName,
        "WorkingHours": total,
        "CompanyID": "108"
      }
      // this.timesheetService.updateTimesheet(id, body).subscribe(res => {
      //   console.log("Res", res);
      //   setTimeout(() => {
      //     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/timesheet']));
      //   }, 1000);
      // }, (err) => {
      //   console.log("Error", err);
      // })
    }
    getTotalHours() {
      this.timesheetService.getTotalHours(this.findByid).subscribe((res: any) => {
        console.log("Res", res);
        this.totalWorkingHrs = res.TotalHours;
      }, (err) => {
        console.log("Errors", err);
      })
    }

    format(num: number) {
      return (num + '').length === 1 ? '0' + num : num + '';
    }

    ///////////////

    getdetail() {
      this.timesheetService.getTimesheet().subscribe((data: any): void => {
        this.alldata = data;
        this.getpenrepo = data;
        this.nik = data
        console.log("getPR+++", data);


        this.getemployee=data;
        console.log("getdetail......21", this.nik);
        
      });
    }
    deleteTimesheet(j: any) {
      console.log(j);

      // if (confirm("Are you sure to delete?")) {
        this.timesheetService.deleteTimesheet1(j).subscribe(async (result) => {
          setTimeout(() => { this.switchtabinfo('pills-info',this.activeTab) }, 1000);
          alert('Timesheet deleted successfully');
          console.log('deleted successfully');
          this.getdetail();
        })
        ;
      // }
    }

    /////////////////////



search(){

  let reqbody=this.Timesheet.value

  console.log("search........",reqbody);
  
  this.timesheetService.search(reqbody).subscribe((data) => {
    


console.log("data",data);

for(let i in data)
{
 
  this.findByid = data[i].emp_id
      this.nameByid =data[i].emp_name
      console.log("emp_name",this.findByid, this.nameByid)

// this.findByid = data.emp_id
//       this.nameByid = data.emp_name



this.searched = data
// this.GetFiltered=data;
console.log("this.searched ",this.searched )
}  
  });

}



switchsummary(activeTab: string): void{ // $event.preventDefault(); 
this.activeTab = activeTab; 
console.log("switchtabsummary");}

switchtabinfo(activeTab: string, $event: MouseEvent): void{
   $event.preventDefault(); this.activeTab = activeTab;
   console.log("switchtabinfo");}
   
   switchnotes(activeTab: string, $event: MouseEvent): void{
    $event.preventDefault(); this.activeTab = activeTab;
    console.log("switchtabnotes");}
    
    
    switchattach(activeTab: string, $event: MouseEvent): void{
       $event.preventDefault(); this.activeTab = activeTab; 
       console.log("switchtabattachement");}

        
      //  download(index: any) {
      //   this.ngxService.start();
      //   var filename = this.fetchAttachment[index].name;
    
      //   this.authService.downloadFile(filename).subscribe(
      //     // data =>console.log(data),
      //     // (data) => saveAs(data, filename)
         
      //   );
      //   this.ngxService.stop();
      //   this.GetAttachments();
      // }




//       resetattach(){
//         this.attachmentForm.reset();
//         this.attachmentForm = this.formBuilder.group({
//           select: ['', [Validators.required]],
//           profile: ['', [Validators.required]],
//           email: [this.data.c],
//           fileSource: ['', [Validators.required]],
//         });
//         this.attachmentForm.get('profile').clearValidators();  
//         this.attachmentForm.get('select').clearValidators(); 
//       }
//       selectAttach(e:any){
//         console.log(e.value);
//       this.selectedattach=e.value;
//       }
    

//       GetAttachments() {
   
//         this.authService.GetAllAttachment(this.data.c).subscribe(async (result) => {
//           console.log(this.data.c);
//           this.fetchAttachment = result.data;
          
//           // console.log('fetched Attachments successfully', this.fetchAttachment);
//           // if (result.success) {
//           //   console.log('CandidateAttachments..fetched successfully...........', result);
//           //   console.log(result.message);
//           // } else {
//           //   console.log(result);
//           //   console.log(result.message);
//           // }
//         });
//       }

//       onChange(event: any) {
//         this.file = event.target.files[0];
//     console.log(this.file.type);
//     if(this.selectedattach=="Resume")
//     {
      
//         if(this.file.type=="application/pdf" || this.file.type=="application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||this.file.type=="application/msword" )
//         {
//           console.log("correct");
          
//           this.selectedattachfile=false;
//         }
//         else {
//           //call validation
//         alert("file type should be pdf/doc/docx")
//           // this.resetattach();
    
//           this.attachmentForm.controls['profile'].reset()
//           this.attachmentForm.controls['profile'].setValidators([Validators.required]);
          
//           this.selectedattachfile=true;
//           this.attachmentForm.get('profile').updateValueAndValidity();
//         }
//     }
    
    
//     if(this.selectedattach=="Aadhaar Card"||this.selectedattach=="Pan Card"||
//     this.selectedattach=="High School certificate"||this.selectedattach=="Higher Secondary certificcate"||
//     this.selectedattach=="Graduation"||this.selectedattach=="Post Graduation"||
//     this.selectedattach=="Previous organization Appointment letter"||
//     this.selectedattach=="last 3 months Salary Slip" ||this.selectedattach=="Passport")
//     {
      
//         if(this.file.type=="application/pdf" || this.file.type=="image/jpeg")
//         {
//           console.log("correct");
          
//           this.selectedattachfile=false;
//         }
//         else {
//           //call validation
//         alert("file type should be pdf/jpeg")
//           // this.resetattach();
    
//           this.attachmentForm.controls['profile'].reset()
//           this.attachmentForm.controls['profile'].setValidators([Validators.required]);
          
//           this.selectedattachfile=true;
//           this.attachmentForm.get('profile').updateValueAndValidity();
//         }
//     }
    
//     if(this.selectedattach=="passport size photograph")
//     {
      
//         if(this.file.type=="image/jpeg" || this.file.type=="image/png")
//         {
//           console.log("correct");
          
//           this.selectedattachfile=false;
//         }
//         else {
//           //call validation
//         alert("file type should be png/jpg/jpeg")
//           // this.resetattach();
    
//           this.attachmentForm.controls['profile'].reset()
//           this.attachmentForm.controls['profile'].setValidators([Validators.required]);
          
//           this.selectedattachfile=true;
//           this.attachmentForm.get('profile').updateValueAndValidity();
//         }
//     }
    
//     if(this.selectedattach=="Resignation letter / screenshot of resignation mail send by candidate and also approved by organization")
//     {
//       if( this.file.type=="image/jpeg"|| this.file.type=="application/pdf" || this.file.type=="application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||this.file.type=="application/msword" )
//         {
//           console.log("correct");
          
//           this.selectedattachfile=false;
//         }
//         else {
//           //call validation
//         alert("file type should be pdf/jpeg/docx/doc")
//           // this.resetattach();
    
//           this.attachmentForm.controls['profile'].reset()
//           this.attachmentForm.controls['profile'].setValidators([Validators.required]);
          
//           this.selectedattachfile=true;
//           this.attachmentForm.get('profile').updateValueAndValidity();
//         }
//     }
    
    
//         this.attachmentForm.patchValue({
//           fileSource: this.file,
//         });
//       }
    





//       attachment() {
//         const { value, valid } = this.attachmentForm;
//         // console.log('testing', this.attachmentForm.value.email);
//         // console.log('testing', this.attachmentForm.value.fileSource);
//         if (valid) {
//           const formData = new FormData();
//           this.ngxService.start();
//           // formData.append('profile',this.attachmentForm.get('fileSource').value);
//           formData.append('profile', this.attachmentForm.get('fileSource').value);
//           formData.append('email', this.attachmentForm.get('email').value);
//           this.httpClient
//             .post(`${this.apiUrl}/api/v1/file/document`, formData)
//             .subscribe((result) => {
//               this.ngxService.stop();
//               // console.log(result);
//               // console.log('successfully uploaded');
//               this.GetAttachments();
//               this.resetattach();
//               // this.attachmentForm.get('profile').clearValidators();  
//               // this.attachmentForm.get('select').clearValidators(); 
//               //this.attachmentForm.reset(this.attachmentForm.controls['select'].setValue(id:-1,name:'Select Attachment'));
//               // this.attachmentForm.reset();
             
             
//               //this.attachmentForm.controls['select'].setValue(this.selectedOption,{onlySelf: true})
//               this.attachmentValid=true;
    
//             });
    
//           //   this.loading = !this.loading;
//           // console.log('file', this.file);
//           // console.log("email with attachment",this.data.c);
//           // this.authService.CandidateAttachment(this.file).subscribe((event: any) => {
//           //  this.GetAttachments();
//           //   if (event.success) {
//           //     console.log('CandidateAttachment...saved...........', event);
//           //     console.log(event.message);
//           //   } else {
//           //     console.log(event);
//           //     console.log(event.message);
//           //   }
//           //   if (typeof event === 'object') {
//           //     this.loading = false; // Flag variable
//           //   }
//           // });
//         } else {
//           return alert('Please Uploade something');
//         }
       
//       }

//       Getnotes() {
  
//         this.authService.GetAllNotes(this.data.c).subscribe(async (result) => {
//           // console.log(this.data.c);
    
//           this.fetchNotes = result;
//           console.log("fetchNotes",this.fetchNotes);
//           // console.log('fetched Notes successfully', this.fetchNotes);
        
//           //   if (result.success) {
//           //     console.log('CandidateNotes...fetched successfully...........', result);
//           //     console.log(result.message);
//           //   } else {
//           //     console.log(result);
//           //     console.log(result.message);
//           //   }
//         });
//       }


// notes(data: any) {
//     // console.log('notes clicked');
//     // console.log(this.editMode);
//     const { value, valid } = this.notesForm;

//     // console.log(value);
//     // console.log(valid);

//     if (valid) {
//       if (this.editMode) {
//         let note = { add_notes: value.add_notes };
//         this.ngxService.start();
//         //  console.log('http://localhost:5000/api/v1/notes/'+this.editNotesId+'.json')
//         // this.httpClient.put(`${this.apiUrl}/api/v1/notes/`+this.editNotesId,note).subscribe(async (result) =>
//         this.authService
//           .updateNotes(this.editNotesId, note)
//           .subscribe(async (result) => {
//             this.ngxService.stop();
//             // console.log('saved');
//             this.notesForm.reset();
//             this.Getnotes();
//             this.editMode = false;

//             console.log(result);
//           });
//       } else {
//         let reqBody2 = {
//           ...this.notesForm.value,
//           email: this.email1,
//         };
//         // console.log(reqBody2);
//         // console.log(this.email1);
//         this.ngxService.start();
//         this.authService.CandidateNotes(reqBody2).subscribe(async (result) => {
//           this.ngxService.stop();
//           this.Getnotes();
          
//           this.notesForm.get('add_notes').clearValidators(); 
//           this.notesForm.reset();
       
          
//           this.noteValid=true;

//           if (result.success) {
//             // console.log('CandidateNotes...saved...........', result);
//             console.log(result.message);
//           } else {
//             // console.log(result);
//             console.log(result.message);
//           }
//         });
//       }
//     } else {
//       return alert('Please write notes');
//     }
//   }

//   deleteNotes(j: any) {
//     // console.log(j);
//     this.ngxService.start();

//     this.authService.DeleteNotes(j).subscribe(async (result) => {
//       this.ngxService.stop();
//       // console.log('deleted successfully');
//       this.Getnotes();
//     });
//   }

//   updateNotes(k: any, index: any): void {
//     // console.log('clisked');
//     this.editMode = true;
//     // console.log("index",k);
//     this.editNotesId = k;
//     //  console.log("data",this.fetchNotes[index]);
//     this.notesForm.setValue({
//       add_notes: this.fetchNotes[index].add_notes,
//       email: this.data.c,
//     });
//   }

//       deleteAttachment(j: any) {
//         // console.log(j);
//         this.ngxService.start();
//         this.authService.DeleteAttachment(j).subscribe(async (result) => {
//           this.GetAttachments();
//           this.ngxService.stop();
//           // console.log(' Attachment deleted successfully');
//           // this.GetAttachments();
//         });
//       }





       
  }
