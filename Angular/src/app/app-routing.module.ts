import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { ProfilesettingsComponent } from './profilesettings/profilesettings.component';
import { UserhomeComponent } from './userhome/userhome.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'customerlogin',component:CustomerloginComponent},
  {path:'customerhome',component:CustomerhomeComponent},
  {path:'profilesettings',component:ProfilesettingsComponent},
  {path:'userlogin/:username',component:UserhomeComponent}
  // {path:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
