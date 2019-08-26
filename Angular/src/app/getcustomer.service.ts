import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { Customers } from './Customers';

@Injectable({
  providedIn: 'root'
})
export class GetcustomerService {

  private _getCustUrl="http://localhost:8080/getCustomerObj/";
  constructor(private _http: HttpClient) { }


  getCustomerObj(custId: number):Observable<Customers>{
    return this._http.get<Customers>(this._getCustUrl+custId);
  }
}
