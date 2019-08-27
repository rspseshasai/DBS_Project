import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from './alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alertSettings$ = new Subject<Alert>()

  constructor() { }


  create(
    title:string, type:string, time:number, body:string
  ){
    this.alertSettings$.next(
      {
        title,
        type,
        time,
        body
      }
    )
  }
}
