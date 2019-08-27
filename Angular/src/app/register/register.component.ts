import { Component, OnInit } from '@angular/core';
import { CustomerloginService } from '../customerlogin.service';
import { Login } from '../login';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from '../register.service';
import { TempRegister } from '../temp-register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public type:string;
  public temp:TempRegister;
  constructor(private route: ActivatedRoute, private _registerService:RegisterService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.type = (params.get("type"))
    })

    console.log(this.type);
    this.temp = new TempRegister(0,'','','','','','','');
  }

  onSubmit(){
    console.log(this.temp);
    let response = this._registerService.saveData(this.temp).subscribe(
      data=>console.log(data), error => console.log(error));

      if(this.type == "user"){
        console.log("in if");
        this.router.navigate(['/userlogin', 1136]);
      }
      else
        this.router.navigate(['/customerlogin']);
  }
}
