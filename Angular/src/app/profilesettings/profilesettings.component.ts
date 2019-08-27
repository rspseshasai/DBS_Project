import { Component, OnInit, Inject } from '@angular/core';
import { Login } from '../login';
import { UpdateService } from '../update.service';
import { Router } from '@angular/router';
import { Customers } from '../Customers';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { GetcustomerService } from '../getcustomer.service';
@Component({
  selector: 'app-profilesettings',
  templateUrl: './profilesettings.component.html',
  styleUrls: ['./profilesettings.component.css']
})
export class ProfilesettingsComponent implements OnInit {
  
  public ld : Login;
  public cust : Customers;

  constructor(
    private _updateService:UpdateService, 
    private _getLoginDataObj:GetcustomerService,
    private _getCustObj: GetcustomerService, 
    private router: Router,
     @Inject(SESSION_STORAGE) private storage: WebStorageService
     ) { }


  ngOnInit() {

    if(sessionStorage.getItem('isLoggedIn') == "true")
   {
    //console.log(sessionStorage.getItem('isLoggedIn'));
    this.ld = new Login(0,'','','');
    this._getCustObj.getCustomerObj(this.storage.get('Id')).subscribe(data=>this.cust=data);

    //console.log(this.cust+"  in ps com");

    this._getLoginDataObj.getLoginDataObj(this.storage.get('Id')).subscribe(data=>this.ld=data);
   }
   else{
    this.router.navigate(['/customerlogin'] );
   }
    //this.cust = new Customers(this.cust.customerId, this.cust.customerName, this.cust.address, this.cust.mobile, this.cust.email);
  }
  onUpdatePro(ld1:Login){
    //console.log(ld1);
    //this.cust.customerId=this.storage.get('Id');
    this.ld.id=this.storage.get('Id');
    this._updateService.saveLoginData(ld1).subscribe(data=>this.ld=data);
    console.log(ld1);
    // let response = this._updateService.saveData(ld1).subscribe(
    //   data=>this.ld=data, error => console.log(error));
      this.router.navigate(['/customerlogin']);
  }
  onUpdatePro1(cust1:Customers){
    //console.log(cust1);
    this.cust.customerId=this.storage.get('Id');
    this._updateService.saveCustomerData(cust1).subscribe(data=>this.cust=data);
    // let response = this._updateService.saveData(ld1).subscribe(
    //   data=>this.ld=data, error => console.log(error));
      this.router.navigate(['/customerlogin']);
  }
}