import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { UserloginService } from '../userlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  public user:Login
  constructor(private _logService: UserloginService, private router: Router) {}

  ngOnInit() {
    this._logService.getLogin().subscribe(data=>console.log(data));
    this.user = new Login(null,"","","");
  }

  onSubmit(){
    //console.log(this.log);
    this._logService.validateUser(this.user).subscribe( 
      (result) => {this.router.navigate(['/userlogin',this.user.userName])},
     // (result) => this.router.navigate(['/some-url'], { queryParams:  filter, skipLocationChange: true}),
      (error)=>this.router.navigate(['/']), 
      );
  }

}
