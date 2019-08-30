import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TempRegister } from './temp-register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserhomeService {

  constructor(private _http : HttpClient) { }
  private _tempUrl = 'http://localhost:8080/userlogin/requests';
  private _acceptUrl ='http://localhost:8080/userlogin/requests/accept';
  private _rejectUrl='http://localhost:8080/userlogin/requests/reject';
  public temp:TempRegister;
 // public result:string;

  getTransactionsList(): Observable<TempRegister[]>{
    return this._http.get<TempRegister[]>(this._tempUrl);
}

acceptList(temp:TempRegister): Observable<TempRegister>{
  //console.log("in service accept list  "+temp.customerName);
    return this._http.post<TempRegister>(this._acceptUrl,temp);
}

rejectList(temp:TempRegister): Observable<any>{
  return this._http.post<any>(this._rejectUrl,temp);
} 

}
