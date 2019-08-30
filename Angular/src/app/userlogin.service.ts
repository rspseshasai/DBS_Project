import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';


@Injectable({
 providedIn: 'root'
})
export class UserloginService {

 private _loginUrl="http://localhost:8080/userlogin";
 constructor(private _http: HttpClient) { }

 getLogin():Observable<Login>{
   return this._http.get<Login>(this._loginUrl);
 }

 validateUser(log){
   return this._http.post<any>(this._loginUrl,log);
 }
}