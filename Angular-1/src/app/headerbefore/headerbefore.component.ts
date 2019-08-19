import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headerbefore',
  templateUrl: './headerbefore.component.html',
  styleUrls: ['./headerbefore.component.css']
})
export class HeaderbeforeComponent implements OnInit {

  @Input() public isUserLoggedIn: boolean;
  constructor() { }

  ngOnInit() {
  }

}
