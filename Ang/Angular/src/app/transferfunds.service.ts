import { Injectable } from '@angular/core';
import { TransferFunds } from './transfer-funds';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Transactions } from './Transactions';

@Injectable({
  providedIn: 'root'
})
export class TransferfundsService {
  
  private _loginUrl="http://localhost:8080/transferfunds";
  private _accountsUrl="http://localhost:8080/getAccountNum/";
  private _getBalUrl="http://localhost:8080/getBal/";

  constructor(private _http: HttpClient) { }

  transferAmount(transfer:Transactions):Observable<Transactions>{
    return this._http.post<Transactions>(this._loginUrl, transfer);
  }

  getAccounts(accNo : number):Observable<any> {
    return this._http.get<any>(this._accountsUrl+accNo);
  }
 
  getBalance(accNo:string):Observable<any>{

    return this._http.get<any>(this._getBalUrl+accNo);

  }
}
