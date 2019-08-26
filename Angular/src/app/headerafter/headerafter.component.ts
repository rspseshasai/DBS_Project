import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerafter',
  templateUrl: './headerafter.component.html',
  styleUrls: ['./headerafter.component.css']
})
export class HeaderafterComponent implements OnInit {
  private id:string;
  constructor(public authService:AuthService, private router: Router) { }

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


}
