import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accounts } from '../Accounts';
import { Customers } from '../Customers';

@Component({
  selector: 'app-getcustid',
  templateUrl: './getcustid.component.html',
  styleUrls: ['./getcustid.component.css']
})
export class GetcustidComponent implements OnInit {

  public cust:Customers;

  constructor(private router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('isLoggedInUser') == "true"){
      this.cust= new Customers(0,"","","","");
    }
    else{
        this.router.navigate(['/userlogin']);
    }
  }

  updateDetails(custId: number){
    console.log(this.cust.customerId);
    this.router.navigate(['/userhome/updateCustDetails', this.cust.customerId ]);
  }
}
