import { Component, OnInit, Inject, Input } from '@angular/core';
import { CustomerloginService } from '../customerlogin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { AccountsService } from '../accounts.service';
import { Accounts } from '../Accounts';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {
  [x: string]: any;
  

  public log:Login;


  private customerId;
  public accountsList: Accounts[];

  public sessionData: any=[];

  constructor(
    private _accountService: AccountsService,
  private currentRoute:ActivatedRoute,
    private _customerService:CustomerloginService, private router: Router) { }

  ngOnInit() {
    

    this.currentRoute.queryParams.subscribe(           

      sessionId => {this.customerId = sessionId['sessionId']; 
      console.log("sessionId = "+sessionId['sessionId']);
     
    });

    this.currentRoute.queryParams.subscribe(  
      sessionUserName => {
        
        sessionUserName['sessionUserName']; 
        console.log("sessionUserName = "+sessionUserName['sessionUserName']);
      });


     this._accountService.getAccountsList(this.customerId).subscribe(data=>this.accountsList=data);
     let param1;

  }

  onSubmit(){
    //console.log("in home comp "+this.id);
    this.router.navigate(['/mytransactions'],  { queryParams: { sessionId:this.customerId} } );
  }

  onClick(accnts: Accounts){
    this.router.navigate(['/mytransactions', accnts.accountNo] );
  }

}


