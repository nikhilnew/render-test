import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

   private apiUrl = environment.apiUrl;

  constructor(private httpClient:HttpClient ) { }
  onboarding_login(data: any):Observable<any>{
    console.log("Server Login")
    // localStorage.setItem('data',this.loging.user);
    
    console.log("onboarding service",data);
    // return this.httpClient.post(`${this.apiUrl}/login`,data);
    return this.httpClient.post(`${this.apiUrl}/employee_login`,data);
  }

  onboarding_registeration(data1: any):Observable<any>{
    console.log("Server registering user")
    return this.httpClient.post(`${this.apiUrl}/employee_reg_onboarding`,data1);
  }
}