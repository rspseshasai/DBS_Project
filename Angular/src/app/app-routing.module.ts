import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { ProfilesettingsComponent } from './profilesettings/profilesettings.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { MyaccountsComponent } from './myaccounts/myaccounts.component';
import { MytransactionsComponent } from './mytransactions/mytransactions.component';
import { TransferfundsComponent } from './transferfunds/transferfunds.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AuthGuard } from './auth.guard';
import { GetcustidComponent } from './getcustid/getcustid.component';
import { UpdatebyuserComponent } from './updatebyuser/updatebyuser.component';
import { CreateaccountuserComponent } from './createaccountuser/createaccountuser.component';
import { RemoveaccountComponent } from './removeaccount/removeaccount.component';
import { ReportedtransComponent } from './reportedtrans/reportedtrans.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'getCustId',component:GetcustidComponent},
  {path:'register',component:RegisterComponent},
  {path:'userlogin',component:UserloginComponent},

  {path:'reportedtrans',component:ReportedtransComponent},


  {path:'removeaccount',component:RemoveaccountComponent},
  {path:'userhome/updateCustDetails/:id',component:UpdatebyuserComponent},
  {path:'createaccountbyuser', component:CreateaccountuserComponent,canActivate: [AuthGuard]},
  {path:'customerlogin',component:CustomerloginComponent},
  {path:'customerhome/:id',component:CustomerhomeComponent,canActivate: [AuthGuard]},
  {path:'customerhome/:id/profilesettings',component:ProfilesettingsComponent,canActivate: [AuthGuard]},
  {path:'userlogin/:id',component:UserhomeComponent},
  {path:'customerhome/:id/myaccounts',component:MyaccountsComponent,canActivate: [AuthGuard]},
  {path:'mytransactions/:accountNo',component:MytransactionsComponent,canActivate: [AuthGuard]},
  {path:'transferfunds/:customerId',component:TransferfundsComponent,canActivate: [AuthGuard]},
  {path:'createaccount', component:CreateaccountComponent,canActivate: [AuthGuard]}
  //{path:'mytransactions',component:MytransactionsComponent}
  // {path:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
