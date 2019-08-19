import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { ActivatedRoute } from '@angular/router';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  public log:Login;
  constructor(private currentRoute:ActivatedRoute,private _userService:UserloginService) { }

  ngOnInit() {
    this._userService.getLogin().subscribe(data=>this.log=data);
    // console.log(this.log.userName, this.log.password);
  }

}
