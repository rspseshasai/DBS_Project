import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TempRegister } from './temp-register';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class RegisterService {
  private _url   = 'http://localhost:8080/createtempaccount';

  saveData(tr:TempRegister):Observable<TempRegister> {
    console.log("in register service" + tr);
      return  this._http.post<any>(this._url,tr);

  }

  constructor(private _http:HttpClient) { }
}
