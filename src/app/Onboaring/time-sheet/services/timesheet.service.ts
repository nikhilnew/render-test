import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient,
    private authService: AuthServiceService) { }


  // Timesheet

   

//////////////
  getTimesheet(){

    return this.httpClient.get(`${this.apiUrl}/api/v1/getAllJoiners`);
  }

  updateTimesheet1(ndata: any): Observable<any> {

    return this.httpClient.put(`${this.apiUrl}/api/v1/edit/` + ndata.id, ndata);
  }

  pstTimesheet(data: any): Observable<any> {
    console.log("creatservice", data)
    return this.httpClient.post(`${this.apiUrl}/api/v1/employee_reg_onboarding`, data);
  }
/////////


  createTimesheet(data: any): Observable<any> {
    console.log("creatservice", data)
    return this.httpClient.post(`${this.apiUrl}/api/v1/Timesheet/insert`, data);
  }

  // getTimesheetById(TimeSheetId: any): Observable<any> {

  //   return this.httpClient.get(`${this.apiUrl}/api/v1/Timesheet/emp/` + TimeSheetId);
  // }
  getTimesheetById(){
    return this.httpClient.get(`${this.apiUrl}/api/v1/Timesheet/getAll`);
  }




  getTimesheet1(): Observable<any> {

    return this.httpClient.get(`${this.apiUrl}/api/v1/Timesheet/getAll`);
  }

  updateTimesheet(pdata: any): Observable<any> {

    return this.httpClient.put(`${this.apiUrl}/api/v1/Timesheet/` + pdata.TimeSheetId, pdata);
  }



  deleteTimesheet1(id: any): Observable<any> {

    return this.httpClient.delete(`${this.apiUrl}/api/v1/Timesheet/` + id);
  }

  getTotalHours(id: any) {
    return this.httpClient.get(`${this.apiUrl}/api/v1/Timesheet/totalworkinghrs/` + id);
  }

  // Project

  getAllProjects(): Observable<any> {

    return this.httpClient.get(`${this.apiUrl}/api/v1/project/getAll`);
  }
  deleteTimesheet(id: any): Observable<any> {

    return this.httpClient.delete(`${this.apiUrl}/api/v1/del/` + id);
  }

  search(data: any): Observable<any> {
    
    return this.httpClient.post(`${this.apiUrl}/api/v1/getAllsearch`,data);
  }

}
