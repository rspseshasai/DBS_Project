import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetcustomerService } from '../getcustomer.service';
import { Login } from '../login';
import { Customers } from '../Customers';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-updatebyuser',
  templateUrl: './updatebyuser.component.html',
  styleUrls: ['./updatebyuser.component.css']
})
export class UpdatebyuserComponent implements OnInit {

  public ld : Login;
  public cust : Customers;
  private custId:number;
  
  constructor(private route: ActivatedRoute,
    private _updateService:UpdateService, 
    private _getLoginDataObj:GetcustomerService,
    private _getCustObj: GetcustomerService, 
    private router: Router
    ) { }

  ngOnInit() {
    //this.custId = this.route.snapshot.paramMap.get("id")
    if(sessionStorage.getItem('isLoggedInUser') == "true")
    {
    this.route.paramMap.subscribe(params => {
      this.custId = parseInt (params.get("id"))
    })

    console.log("in ubu " + this.custId);

    this._getCustObj.getCustomerObj(this.custId).subscribe(
      
      data=>this.cust=data,

      (error)=>{
        alert("CustomerId not found...Enter again");
        this.router.navigate(['/getCustId'])},
      );

    this._getLoginDataObj.getLoginDataObj(this.custId).subscribe(
      data=>this.ld=data, 
      );
    }

    else{
      this.router.navigate(['/userlogin']);
    }
  }

  onUpdatePro(ld1:Login){

    this.ld.id=this.custId;
    this._updateService.saveLoginData(ld1).subscribe(data=>this.ld=data);
    console.log(ld1);
    // let response = this._updateService.saveData(ld1).subscribe(
    //   data=>this.ld=data, error => console.log(error));
      this.router.navigate(['/userlogin/1136']);
  }
  onUpdatePro1(cust1:Customers){
    this.cust.customerId=this.custId;
    this._updateService.saveCustomerData(cust1).subscribe(data=>this.cust=data);
      this.router.navigate(['/userlogin/1136']);
  }

}
