import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Accounts } from '../Accounts';

@Component({
  selector: 'app-myaccounts',
  templateUrl: './myaccounts.component.html',
  styleUrls: ['./myaccounts.component.css']
})
export class MyaccountsComponent implements OnInit {

  public accountsList: Accounts[];
  constructor(private _accountService: AccountsService) { }

  ngOnInit() {
    //this._accountService.getAccountsList().subscribe(data=>this.accountsList=data);
  }

}
