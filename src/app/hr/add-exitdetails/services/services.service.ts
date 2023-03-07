import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  [x: string]: any;

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  AddExitDetails(cdata: any): Observable<any> {

    console.log("check", cdata)

    return this.httpClient.post(`${this.apiUrl}/api/v1/AddExitDetails/AddExit`,cdata);

  }

  



 
}




