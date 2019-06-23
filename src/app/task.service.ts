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
   //background to get data by announcing it and getting task
  getData(): Observable<any>{
    var user = JSON.parse(localStorage.getItem("currentUser"));
    return this.http.get(this.api_url + `/${user.user_id}`)// need to work with API
   }
  
   //getting task-details for one user
   getTask(idtask): Observable<any>{
    return this.http.get(this.api_url + `/details/${idtask}`)// need to work with API
   }
   
   //posting task
   addItem(item): Observable<any>{
    var user = JSON.parse(localStorage.getItem("currentUser"));
     return this.http.post<any>(this.api_url + `/${user.user_id}`, JSON.stringify(item),
     this.httpOptions);
   }
   //getting task query
   getFilter(item): Observable<any>{
     console.log(item);
    var user = JSON.parse(localStorage.getItem("currentUser"));    
    var queryString = Object.keys(item).map(key=>key + "=" + item[key]).join('&');
    console.log(queryString);
    
     return this.http.get<any>(this.api_url + `/filter/${user.user_id}` + '?' + queryString); 
   }

   

   //login
   login(username, password): Observable<any> {
    var api_url = 'http://localhost:3000/api/login';
    return this.http.post<any>(api_url, JSON.stringify({username, password}), this.httpOptions);
  }
  //Register
  register(data): Observable<any> {
    var api_url = 'http://localhost:3000/api/register';
    return this.http.post<any>(api_url, JSON.stringify(data), this.httpOptions);
  }

 
  logout() {
    localStorage.removeItem('currentUser');
  }
  
  //update task
  update(data, x): Observable<any> {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    let api_url = 'http://localhost:3000/api/update';
    return this.http.patch<any>(api_url + `/${user.user_id}`, JSON.stringify({idtask:data, progress_level:x}), this.httpOptions);
  }

 }
   

