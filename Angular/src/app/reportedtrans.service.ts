import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportedTrans } from './ReportedTrans';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class ReportedtransService {
 constructor(private _http : HttpClient) { }
 private _reportUrl = 'http://localhost:8080/userlogin/reportedtrans';
 getReportedList():Observable<ReportedTrans[]> {
   return this._http.get<ReportedTrans[]>(this._reportUrl);
 }
}