import { Component, OnInit } from '@angular/core';
import { CustomerloginService } from '../customerlogin.service';
import { Login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
  public log:Login;
  constructor(private _logService: CustomerloginService, private router: Router) { }

  ngOnInit() {
    this._logService.getLogin().subscribe(data=>console.log(data));
    this.log = new Login("","");
  }

  onSubmit(){
    //console.log(this.log);
    this._logService.validateUser(this.log).subscribe( 
      (result) => {this.router.navigate(['/customerlogin',this.log.userName])},
      (error)=>this.router.navigate(['/']), 
      );
  }
}
