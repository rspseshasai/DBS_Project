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



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'customerlogin',component:CustomerloginComponent},
  {path:'customerhome/:id',component:CustomerhomeComponent},
  {path:'customerhome/:id/profilesettings',component:ProfilesettingsComponent},
  {path:'userlogin/:id',component:UserhomeComponent},
  {path:'customerhome/:id/myaccounts',component:MyaccountsComponent},
  {path:'mytransactions/:accountNo',component:MytransactionsComponent},
  {path:'transferfunds',component:TransferfundsComponent},
  {path:'createaccount', component:CreateaccountComponent}
  //{path:'mytransactions',component:MytransactionsComponent}
  // {path:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
