import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';// this for observable

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  

  // api URL
  api_url = 'http://localhost:3000/api/task';
  
  // this shows that request is a json folder
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  };

  constructor(private http:HttpClient) {}
   //background to get data by announcing it
  getData(): Observable<any>{
    return this.http.get(this.api_url);
   }

   addItem(item): Observable<any>{
     return this.http.post<any>(this.api_url, JSON.stringify(item),
     this.httpOptions);
   }

   //login
   login(username, password): Observable<any> {
    return this.http.post<any>(this.api_url, JSON.stringify({username, password}), this.httpOptions);
  }
 
  logout() {
    localStorage.removeItem('currentUser');
  }
 
 }
   

