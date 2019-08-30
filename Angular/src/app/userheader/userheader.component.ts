import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
  }
  logout(): void {
    console.log("Logout");
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.clear();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
