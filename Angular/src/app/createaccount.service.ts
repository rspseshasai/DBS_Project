import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Accounts } from './Accounts';

@Injectable({
  providedIn: 'root'
})
export class CreateaccountService {

  private _loginUrl="http://localhost:8080/createaccount";
  constructor(private _http: HttpClient) { }
  
  createAccount(accs:Accounts):Observable<Accounts>{
    console.log("in create acc service comp");
    return this._http.post<Accounts>(this._loginUrl, accs);

  }
}
