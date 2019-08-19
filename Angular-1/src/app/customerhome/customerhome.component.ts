import { Component, OnInit } from '@angular/core';
import { CustomerloginService } from '../customerlogin.service';
import { ActivatedRoute } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {
  public log:Login;
  constructor(private currentRoute:ActivatedRoute,private _customerService:CustomerloginService) { }

  ngOnInit() {
    this._customerService.getLogin().subscribe(data=>this.log=data);
    // console.log(this.log.userName, this.log.password);
  }

}
