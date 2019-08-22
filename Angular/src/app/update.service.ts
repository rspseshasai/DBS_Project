import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customers } from './Customers';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private _updateurl = 'http://localhost:8080/customerlogin/update/login';
  private _updateurl1 = 'http://localhost:8080/customerlogin/update/personal';
  
  saveLoginData(ld:Login):Observable<Login> {
    console.log(ld.id);
    return  this._http.post<Login>(this._updateurl,ld);
}
saveCustomerData(cust:Customers):Observable<Customers> {
  return  this._http.post<Customers>(this._updateurl1,cust);
}
  constructor(private _http:HttpClient) { }
}