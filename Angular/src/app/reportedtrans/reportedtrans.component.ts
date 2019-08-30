import { Component, OnInit } from '@angular/core';
import { ReportedTrans } from '../ReportedTrans';
import { ReportedtransService } from '../reportedtrans.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
 selector: 'app-reportedtrans',
 templateUrl: './reportedtrans.component.html',
 styleUrls: ['./reportedtrans.component.css']
})
export class ReportedtransComponent implements OnInit {
 public reportlist : ReportedTrans[];
 constructor(private _reportedtransservice: ReportedtransService,
   private currentRoute:ActivatedRoute,
   private router: Router) { }
 ngOnInit() {
   console.log("in rep trnas");
   this._reportedtransservice.getReportedList().subscribe(data=>this.reportlist=data);
 }
}