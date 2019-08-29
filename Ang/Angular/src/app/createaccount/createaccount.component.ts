import { Component, OnInit, Inject } from '@angular/core';
import { CreateaccountService } from '../createaccount.service';
import { Accounts } from '../Accounts';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  constructor(private _createaccservice:CreateaccountService,private router: Router, @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  public accs:Accounts;

  ngOnInit() {
    this.accs = new Accounts("", 0.0, 0.0, "");
  }

  onSubmit(){
    this.accs.customerId =  this.storage.get('Id');
    this._createaccservice.createAccount(this.accs).subscribe(data=>this.accs=data);
    let sessionUserName =  this.storage.get('UserName');
    let sessionId = this.storage.get('Id');
      this.router.navigate(['/customerhome', this.accs.customerId],  { queryParams: { sessionUserName, sessionId } } );
  }
}
