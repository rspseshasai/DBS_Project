import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerloginService {

  private _loginUrl="http://localhost:8080/customerlogin";
  constructor(private _http: HttpClient) { }

  getLogin():Observable<Login>{
    return this._http.get<Login>(this._loginUrl);
  }

  validateUser(log:Login){
    //console.log("USer in Validate method : "+log.userName)
    return this._http.post<Login>(this._loginUrl,log);
  }
}
