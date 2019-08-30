import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { ActivatedRoute, Router } from '@angular/router';
import { UserloginService } from '../userlogin.service';
import { UserhomeService } from '../userhome.service';
import { TempRegister } from '../temp-register';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  public log:Login;
  public temp:TempRegister[];
  public temp1:TempRegister;
  constructor(private currentRoute:ActivatedRoute,
    private router: Router,
    private _userService:UserloginService,
    private _userHomeService : UserhomeService
    ) { }

  ngOnInit() {
    if(sessionStorage.getItem('isLoggedInUser')=="true")
    {
      this._userService.getLogin().subscribe(data=>this.log=data);
      // console.log(this.log.userName, this.log.password);
      this._userHomeService.getTransactionsList().subscribe(data=>this.temp=data);
      this.temp1 = new TempRegister(0,"","","","","","","");
    }
    else{
      this.router.navigate(['/userlogin'] );
    }
  }
  onAccept(tem:TempRegister){
    console.log("in on submit "+tem.customerName);
    this._userHomeService.acceptList(tem).subscribe(data=>this.temp1=data);
    console.log(this.temp1);
    this.router.navigate(['/userlogin', "user"]);
  }

  onReject(temp1:TempRegister){
    console.log("in on reject "+temp1.customerName);
    this._userHomeService.acceptList(temp1).subscribe(data=>this.temp1=data);
    console.log(this.temp1);
   // this._userHomeService.rejectList(this.temp1).subscribe(data=>this.temp1=data);
  }

  updateCustomers(){
    this.router.navigate(['/getCustId']);
  }

  createNewAccount(){
    this.router.navigate(['/register']);
  }

  createNewBankAccount(){
    this.router.navigate(['/createaccountbyuser']);
  }

  deleteAccount(){
    this.router.navigate(['/removeaccount']);
  }
  getReportedTransactions() {
    console.log("in u h c g r t");
    this.router.navigate(['/reportedtrans']);
  }
}
