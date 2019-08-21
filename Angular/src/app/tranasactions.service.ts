import { Injectable } from '@angular/core';
import { Transactions } from './Transactions';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranasactionsService {

  private _transactionsurl="http://localhost:8080/recenttransactions/";
  
  constructor(private _http: HttpClient) { }

  getTransactionsList(accNo: String): Observable<Transactions[]>{
    return this._http.get<Transactions[]>(this._transactionsurl+accNo);
}
}
