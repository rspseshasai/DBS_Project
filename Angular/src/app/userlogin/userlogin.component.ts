import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { UserloginService } from '../userlogin.service';
import { Router } from '@angular/router';
import { PopupssService } from '../popupss.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  public user:Login
  constructor(private _logService: UserloginService, private _popupService:PopupssService,private router: Router) {}

  ngOnInit() {
    this._logService.getLogin().subscribe(data=>console.log(data));
    this.user = new Login(null,"","","");
  }

  onSubmit(){
    //console.log(this.log);

    this._logService.validateUser(this.user).subscribe( 



      (result) => {
        
        sessionStorage.setItem('isLoggedInUser', "true");
        
        this.router.navigate(['/userlogin',this.user.userName])},
     // (result) => this.router.navigate(['/some-url'], { queryParams:  filter, skipLocationChange: true}),
      (error)=>{
        //alert("Invalid Credientials..Enter again");
        //this.router.navigate(['/'])}, 
        this._popupService.confirm('Invalid Credentials', 'Enter Again').then((confirmed) => console.log('User confirmed:', confirmed))
   .catch(() => console.log('User dismissed the dialog '));

            this.router.navigate(['/userlogin'])}
      );
  }

}
