import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customerdemologin',
  templateUrl: './customerdemologin.component.html',
  styleUrls: ['./customerdemologin.component.css']
})
export class CustomerdemologinComponent implements OnInit {

  public cust:Login
  constructor(private currentRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cust = new Login("","")
    let custname = (this.currentRoute.snapshot.paramMap.get('username'));
    console.log(custname)
    this.cust.userName = custname
  }

}
