import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { environment } from 'src/environments/environment';




// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

// const baseURL1 = 'http://localhost:8000/login';
// const baseURL3 = 'http://localhost:5000/send_email';


@Injectable({
  providedIn: "root",
})
export class DashboardService {
  // private apiurl0 = environment.apiUrl;
  private apiurl = environment.apiUrl2;
  [x: string]: any;

  // url = "http://localhost:5000/send_email";

  // url1 = "http://localhost:3000/api/leave_status";

  constructor(private http: HttpClient) { }
  // constructor(private httpClient: HttpClient) { }
  // leaves() {
  //   return this.http.get(`${this.apiurl0}/leaves`);
  // }

  // birthday() {
  //   return this.http.get("http://localhost:5000/birthday");
  // }

  newHire() {
    return this.http.get(`${this.apiurl}/newhire`);
  }

  // newHire(okdata: any): Observable<any> {
  //   console.log("check newHire", okdata)
  //   return this.http.get(`${this.apiurl}/newhire`, okdata);
  // }

  
  GetPReport(){
    return this.http.get("http://localhost:3000/api/leave_status/getData");
  }

  pendingreport(id: any, Action: any): Observable<any> {
    console.log("api",id);
    console.log("api data..........................",Action);
    return this.http.put(`http://localhost:3000/api/leave_status/multipleid/${id}`, Action);
    
}


  ApplyLeave(Cdata: any): Observable<any> {
    console.log("check Cdata..", Cdata)
    return this.http.post(`${this.apiurl}/leaves/apply`, Cdata);
  }

  Addleave(Bdata: any): Observable<any> {
    console.log("check Bdata..", Bdata)
    return this.http.post(`${this.apiurl}/leave/add`, Bdata);
  }

  Addholiday(Adata: any): Observable<any> {
    console.log("check Adata", Adata)
    return this.http.post(`${this.apiurl}/AddHoliday/add`, Adata);
  }

  getEmployees(){
    return this.http.get(`${this.apiurl}/employees/getAll`);
  }

  AddSchedule(Ddata: any): Observable<any> {
    console.log("check Adata", Ddata)
    // return this.http.post(`${this.apiurl}/schedule/add`, Ddata);
    return this.http.post(`${this.apiurl}/schedule/add`, Ddata);
  }

  ConfigurePayPeriod(Edata: any): Observable<any> {
    console.log("check Adata", Edata)
    return this.http.post(`${this.apiurl}/period/configure`, Edata);
  }

 Department(){
    return this.http.get(`${this.apiurl}/departmentdetails/getAll`);
  }

  DepartmentDetails(cdata: any): Observable<any> {
    console.log("check", cdata)
    return this.http.post(`${this.apiurl}/departmentdetails/apply`, cdata);
  }
  
  Designations(){
    return this.http.get(`${this.apiurl}/designation/getAll`);
  }

  DesignationDetails(Fdata: any): Observable<any> {
    console.log("check", Fdata)
    return this.http.post(`${this.apiurl}/designation/add`, Fdata);

  }






}
