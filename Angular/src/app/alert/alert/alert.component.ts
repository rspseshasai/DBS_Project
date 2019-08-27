import { Component, OnInit, NgZone } from '@angular/core';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {


  modalStatus:boolean;

  title:string;
  type:string;
  time:number;
  body:string;

  colou:string;
  backColor:string;

  constructor(
    private _alertService:AlertService,
    private _ngZone: NgZone

  ) { }

  ngOnInit() {
    this._alertService.alertSettings$.subscribe(

      (data) => {
          this.title = data.title;
          this.type = data.type;
          this.time = data.time;
          this.body = data.body;

          this.modalStatus=true;
          this._ngZone.runOutsideAngular(()=> 
          setTimeout(()=>
            this._ngZone.run(()=>
              this.modalStatus=false
            ), this.time
          )
          )
      }
    );
  }

resolve(){
  this.modalStatus =false;
}

}
