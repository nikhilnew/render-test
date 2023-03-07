import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, Observable } from "rxjs";

// import { DashboardService } from "../hr/services/dashboard.service";
import { environment } from '../../environments/environment';




@Injectable({
  providedIn: "root",
})
export class DashboardService {
  [x: string]: any;
  private apiUrl = environment.apiUrl;
  // private  localUrl = environment.localUrl;


  constructor(private http: HttpClient) { }
  // constructor(private httpClient: HttpClient) { }
  leaves() {
    return this.http.get(`${this.apiUrl}/api/v1/dashboard/leaves`);
  }

  birthday() {
    return this.http.get(`${this.apiUrl}/api/v1/dashboard/birthday`);
  }

  newHire() {
    return this.http.get(`${this.apiUrl}/api/v1/dashboard/newHire`);
  }

  knowledgecenter() {
    return this.http.get(`${this.apiUrl}/api/v1/Knowledgecenter/getAll`);
  }

  approvForReq(EmployeeId:any) {
    return this.http.get(`${this.apiUrl}/api/v1/dashboard/approvalForRequests/`+EmployeeId);
  }

  UpcmgHoliday() {
    return this.http.get(`${this.apiUrl}/api/v1/dashboard/upcomingHolidays`);
  }


  timesheetbyempid(empid:any) {
    return this.http.get(`${this.apiUrl}/api/v1/Timesheet/emp/`+empid);
   }
  announcement() {
    return this.http.get(`${this.apiUrl}/api/v1/announcement/getAll`);
  }


  GetPReport() {
    return this.http.get(`${this.apiUrl}/api/leave_status/getData`);
  }



  pendingreport(id: any, data: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/api/leave_status/${id}`, data);
    console.log("api", id);

  }

  ApplyLeave(cdata: any): Observable<any> {
    console.log("check", cdata)
    return this.http.post(`${this.apiUrl}/api/v1/leaves/apply`, cdata);
  }

  ContactUs(cdata: any): Observable<any> {

    console.log("check", cdata)

    return this.http.post(`${this.apiUrl}/send_email`, cdata);
  

  }

  sendBdayWish(data: any) {

    return this.http.post(`${this.apiUrl}/send_email`, data);
  }

   Department(){
    return this.http.get(`${this.apiUrl}/api/v1/departmentdetails/getAll`);
  }

  DepartmentDetails(cdata: any): Observable<any> {
    console.log("check", cdata)
    return this.http.post(`${this.apiUrl}/api/v1/departmentdetails/apply`, cdata);
  }

  updateDepartment(pdata: any): Observable<any> {
    console.log("check.............", pdata)
    return this.http.put(`${this.apiUrl}/api/v1/departmentdetails/`+ pdata.departmentId, pdata);
  }


  deleteDepartment(id:any):Observable<any>{
    console.log("Deleting Department Details from the server")
    return this.http.delete(`${this.apiUrl}/api/v1/departmentdetails/`+id);   
  }
  
  Designations(){
    return this.http.get(`${this.apiUrl}/api/v1/designation/getAll`);
  }

  DesignationDetails(Fdata: any): Observable<any> {
    console.log("check", Fdata)
    return this.http.post(`${this.apiUrl}/api/v1/designation/add`, Fdata);

  }
  deleteDesignation(id:any):Observable<any>{
    console.log("Deleting Designation Details from the server")
    return this.http.delete(`${this.apiUrl}/api/v1/designation/`+id);
    
  }
  
  updateDesignations(ndata: any): Observable<any> {
    console.log("check.............", ndata)
    return this.http.put(`${this.apiUrl}/api/v1/designation/`+ ndata.id, ndata);
  }


  Addholiday(Adata: any): Observable<any> {
    console.log("check Adata", Adata)
    return this.http.post(`${this.apiUrl}/api/v1/AddHoliday/add`, Adata);
  }

  holiday(){
    return this.http.get(`${this.apiUrl}/api/v1/AddHoliday/getAll`);
  }
  holidaybyid(HolidayId:any){
    return this.http.get(`${this.apiUrl}/api/v1/designation/`+HolidayId);
  }

  deleteholi(HolidayId:any):Observable<any>{
    console.log("Deleting Holiday from the server")
    return this.http.delete(`${this.apiUrl}/api/v1/AddHoliday/`+HolidayId);
    
  }
  updateholiday(ndata: any): Observable<any> {
    console.log("check.............", ndata)
    return this.http.put(`${this.apiUrl}/api/v1/AddHoliday/`+ ndata.HolidayId, ndata);
  }


  AddCustomize(cdata: any): Observable<any> {
    console.log("check", cdata)
    return this.http.post(`${this.apiUrl}/api/v1/balance/customize`, cdata);
  }

  customize(){
    return this.http.get(`${this.apiUrl}/api/v1/balance/getAll`);
  }

  // getEmployees(){
  //   return this.http.get('https://hrms-api-47nx.onrender.com/api/v1/employees/getAll');
  // }


  getEmployees(){

    return this.http.get(`${this.apiUrl}/api/v1/getAllJoiners`);
  }
  
}
