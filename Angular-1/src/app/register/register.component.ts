import { Component, OnInit } from '@angular/core';
import { CustomerloginService } from '../customerlogin.service';
import { Login } from '../login';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { TempRegister } from '../temp-register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public temp:TempRegister;
  constructor(private _registerService:RegisterService, private router: Router) { }

  ngOnInit() {
    this.temp = new TempRegister(null,'','','','','','','');
  }

  onSubmit(){
    console.log(this.temp);
    let response = this._registerService.saveData(this.temp).subscribe(
      data=>console.log(data), error => console.log(error));
      this.router.navigate(['/customerlogin']);
  }
}
