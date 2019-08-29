import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accounts } from './Accounts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoveaccountService {

  private _loginUrl="http://localhost:8080/removeaccount";
 constructor(private _http: HttpClient) { }

 removeAccount(accNo:String):Observable<String>{
   return this._http.get<String>(this._loginUrl+'/'+accNo);
 }
}
