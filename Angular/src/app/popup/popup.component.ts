import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  constructor(private activeModal: NgbActiveModal,private _authService : AuthService,private router: Router,private bnIdle: BnNgIdleService) { }

  ngOnInit() {
  }

  logout(): void {
    console.log("Logout");
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.clear();
    this._authService.logout();
    this.dismiss();
    this.router.navigate(['/customerlogin']);
    this.bnIdle.stopTimer();
  }

  public accept() {
    this.dismiss();
      }

  public dismiss() {
    this.activeModal.dismiss();
  }

}
