import { Component, OnInit } from '@angular/core';
import { TransferFunds } from '../transfer-funds';
import { Router } from '@angular/router';
import { TransferfundsService } from '../transferfunds.service';
import { Transactions } from '../Transactions';

@Component({
  selector: 'app-transferfunds',
  templateUrl: './transferfunds.component.html',
  styleUrls: ['./transferfunds.component.css']
})
export class TransferfundsComponent implements OnInit {

  public transfer:Transactions;
  constructor( private router: Router,  private _transferservice: TransferfundsService) { }

  ngOnInit() {
    this.transfer = new Transactions(0,"","",0,"");
  }

  onSubmit(){
    //this.router.navigate(['/customerhome', this.transfer],  { queryParams: { sessionUserName, sessionId } } )}
    this._transferservice.transferAmount(this.transfer).subscribe(
      data=>console.log(data));
  }
  }

