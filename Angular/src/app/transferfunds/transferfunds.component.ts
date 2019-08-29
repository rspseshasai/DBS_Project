import { Component, OnInit } from '@angular/core';
import { TransferFunds } from '../transfer-funds';
import { Router, ActivatedRoute } from '@angular/router';
import { TransferfundsService } from '../transferfunds.service';
import { Transactions } from '../Transactions';

@Component({
  selector: 'app-transferfunds',
  templateUrl: './transferfunds.component.html',
  styleUrls: ['./transferfunds.component.css']
})
export class TransferfundsComponent implements OnInit {

  public transfer:Transactions;
  public accs: string[];
  constructor( 
    private router: Router,
    private currentRoute:ActivatedRoute,
    private _transferservice: TransferfundsService
    ) { }

  ngOnInit() {
    //console.log(sessionStorage.getItem('isLoggedIn') + "isloged in in transfer comp");
    if(sessionStorage.getItem('isLoggedIn')=="true" )
    {
      this.transfer = new Transactions(0,"","",0,"");

      //-----------------------------------=
      let custId:string = this.currentRoute.snapshot.paramMap.get('customerId');
      let cusId : number = parseInt(custId);
      console.log(custId);
      this._transferservice.getAccounts(cusId).subscribe(data => this.accs= data);
      //-----------------------------------=

    }
      else{
        this.router.navigate(['/customerlogin'] );
      }
  }

  onSubmit(){
    //this.router.navigate(['/customerhome', this.transfer],  { queryParams: { sessionUserName, sessionId } } )}
    this._transferservice.transferAmount(this.transfer).subscribe(
      data=>console.log(data),
      (error)=>{
        alert("Invalid to account number...Enter again");
        this.router.navigate(['/transferfunds'])},
      );
  }
  }

