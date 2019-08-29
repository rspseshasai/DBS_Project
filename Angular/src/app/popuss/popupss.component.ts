import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';
@Component({
 selector: 'app-popup',
 templateUrl: './popupss.component.html',
})
export class PopupssComponent implements OnInit {
 @Input() title: string;
 @Input() message: string;
 @Input() btnOkText: string;
 @Input() btnCancelText: string;
 constructor(private activeModal: NgbActiveModal,private _authService : AuthService,private router: Router) { }
 ngOnInit() {
 }
 logout(): void {
   console.log("Logout");
   sessionStorage.removeItem('isLoggedIn');
   sessionStorage.clear();
   this._authService.logout();
   this.dismiss();
   this.router.navigate(['/customerlogin']);
 }
 public accept() {
   this.dismiss();
   this.router.navigate(['/customerhome']);
   }
 public dismiss() {
   this.activeModal.dismiss();
 }
}