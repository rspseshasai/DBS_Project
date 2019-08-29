import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { PopupService } from '../popup.service';
@Component({
 selector: 'app-headerafter',
 templateUrl: './headerafter.component.html',
 styleUrls: ['./headerafter.component.css']
})
export class HeaderafterComponent implements OnInit {
 private id:string;
 constructor(public authService:AuthService, private router: Router,
   private bnIdle: BnNgIdleService,private _getPopup : PopupService) {
     this.bnIdle.startWatching(180).subscribe((res) => {
       if(res) {
        //  this.authService.logout();
        //    // console.log("session expired");
        //    this.bnIdle.stopTimer();
        //    // this.bnIdle.unsubscribe();
        //    this.router.navigate(['']);
        this.getPopup();
       }
     })
   }
 ngOnInit() {
   this.id = localStorage.getItem('token');
 }
 logout(): void {
   console.log("Logout");
   sessionStorage.removeItem('isLoggedIn');
   sessionStorage.clear();
   this.authService.logout();
   this.router.navigate(['/login']);
 }
  getPopup(){
    this._getPopup.confirm('Your Session timed out', 'Do you want to stay logged in?').then((confirmed) => console.log('User confirmed:', confirmed))
    .catch(() => console.log('User dismissed the dialog '));
  }
} 