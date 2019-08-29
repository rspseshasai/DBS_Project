import { Component, OnInit, Inject } from '@angular/core';
import { CreateaccountService } from '../createaccount.service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { Accounts } from '../Accounts';
import { RemoveaccountService } from '../removeaccount.service';

@Component({
  selector: 'app-removeaccount',
  templateUrl: './removeaccount.component.html',
  styleUrls: ['./removeaccount.component.css']
})
export class RemoveaccountComponent implements OnInit {

  constructor(private _remove:RemoveaccountService, @Inject(SESSION_STORAGE) private storage: WebStorageService, private router: Router) { }

  public s:String;
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
    this._remove.removeAccount(this.accs.accountNo).subscribe(
      data=>this.s=data
      );
    this.router.navigate(['/userlogin', 1136]);

  }
}
