import { Component, OnInit } from '@angular/core';
import { Transactions } from '../Transactions';
import { CustomerloginService } from '../customerlogin.service';
import { Login } from '../login';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from '../accounts.service';
import { Accounts } from '../Accounts';
import { TranasactionsService } from '../tranasactions.service';

@Component({
  selector: 'app-mytransactions',
  templateUrl: './mytransactions.component.html',
  styleUrls: ['./mytransactions.component.css']
})
export class MytransactionsComponent implements OnInit {
  [x: string]: any;
  public translist:Transactions[];
  public log:Login;



  constructor(private _transactionservice: TranasactionsService, 
    private currentRoute:ActivatedRoute, 
    private _transervice:TranasactionsService,
    private _customerservice:CustomerloginService, 
    private router: Router) { }

  ngOnInit() {


    let accNo = this.currentRoute.snapshot.paramMap.get('accountNo');

    console.log("in my transa acc no = "+accNo);
    this._transactionservice.getTransactionsList(accNo).subscribe(data=>this.translist=data);

    // this.currentRoute.queryParams.subscribe(  
    //   sessionId => {
        
    //     sessionId['sessionId']; 
    //     console.log("sessionId in transaction comp = "+sessionId['sessionId']);

        

    //   });

    // let param1;

    //console.log(this.currentRoute.snapshot.paramMap.get("q"));



    console.log("In my transcns comp");
    //console.log("in my transactions " + this.currentRoute.snapshot.paramMap.get('q'));
  }

}
