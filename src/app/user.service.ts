import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {environment}   from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {

  }
  getUsers(url: any , data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}${url}`,data );
  }

  addUser(url:any, data:any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}${url}`,data);
  }

  updateUser(url:any, data:any): Observable<any> {

    return this.http.put<any>(`${environment.baseUrl}${url}`,data);
  }
  getuserById(url:any): Observable<any>{

    return this.http.get<any>(`${environment.baseUrl}${url}`)

  }

  updateuserById(url:any, data:any): Observable<any>{

    return this.http.put<any>(`${environment.baseUrl}${url}`,data)

  }


}
