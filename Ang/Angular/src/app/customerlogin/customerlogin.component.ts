import { Component, OnInit, Inject } from '@angular/core';
import { CustomerloginService } from '../customerlogin.service';
import { Login } from '../login';
import { Router } from '@angular/router';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { AuthService } from '../auth.service';
import { PopupssService } from '../popupss.service';


@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
  public log:Login;
  public   returnUrl: string;
  
  constructor( @Inject(SESSION_STORAGE) private storage: WebStorageService,
  private _popupService:PopupssService,
  private _logService: CustomerloginService, private router: Router,private authService : AuthService) { }

  

  ngOnInit() {
    this._logService.getLogin().subscribe(data=>console.log(data));
    this.log = new Login(0,"","","");
    this.returnUrl = '/customerhome/:id';
    this.authService.logout();
  }

  onSubmit(){
    //console.log(this.log);
    this._logService.validateUser(this.log).subscribe( 
      (result) => { 

        this.log=result;
        console.log(this.log);
        
        sessionStorage.setItem('isLoggedIn', "true");
        sessionStorage.setItem('token', this.log.userName);



        //sessionStorage.setItem('loggedInCustObj', )
       // let sessionData;
        let idv;
        //let sessionData: any[];
        idv=5;
        this.storage.set('UserName', this.log.userName);
        this.storage.set('Id', this.log.id);

        var sessionData =[ 
          { UserName : this.storage.get('UserName')}, 
          { Id : this.storage.get('Id')} 
        ];
       
        //sessionData.push({'UserName' : this.storage.get('UserName')});
       // sessionData = this.storage.get('UserName');

       console.log(sessionData[0].UserName);

        let sessionUserName = sessionData[0].UserName;

        let sessionId = sessionData[1].Id;
        console.log(sessionData[0].UserName);
        
        this.router.navigate(['/customerhome', this.log.id],  { queryParams: { sessionUserName, sessionId } } )},
          (error)=>{
            //console.log("in error");
            //alert("Invalid Credientials....Enter again !");

            //
            this._popupService.confirm('Invalid Credentials', 'Enter Again').then((confirmed) => console.log('User confirmed:', confirmed))
   .catch(() => console.log('User dismissed the dialog '));

            this.router.navigate(['/customerlogin'])}
          );
  }
}
