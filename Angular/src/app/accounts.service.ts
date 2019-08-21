import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Accounts } from './Accounts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private _accountsurl="http://localhost:8080/getaccountslist/";

  constructor(private _http: HttpClient) { }

  getAccountsList(customerId: number): Observable<Accounts[]>{
    console.log("in account service "+ customerId);
      return this._http.get<Accounts[]>(this._accountsurl + customerId);
  }
}
