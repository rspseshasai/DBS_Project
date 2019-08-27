import { Component, OnInit, Inject } from '@angular/core';
import { CreateaccountService } from '../createaccount.service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Accounts } from '../Accounts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccountuser',
  templateUrl: './createaccountuser.component.html',
  styleUrls: ['./createaccountuser.component.css']
})
export class CreateaccountuserComponent implements OnInit {

  constructor(private _createaccservice:CreateaccountService, @Inject(SESSION_STORAGE) private storage: WebStorageService, private router: Router) { }

  public accs:Accounts;

  ngOnInit() {
    if(sessionStorage.getItem('isLoggedInUser') == "true")
    {
    this.accs = new Accounts("", 0.0, 0.0, "");
    }
    else{
      this.router.navigate(['/userlogin']);
    }
  }

  onSubmit(){
    //this.accs.customerId = this.accs.customerId;
    this._createaccservice.createAccount(this.accs).subscribe(
      data=>this.accs=data,
      (error)=>{
        alert("CustomerId not found...Enter again");
        this.router.navigate(['/createaccountbyuser'])},
      );



    this.router.navigate(['/userlogin', 1136]);

  }
}
