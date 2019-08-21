import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserloginComponent } from './userlogin/userlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { HeaderbeforeComponent } from './headerbefore/headerbefore.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { HeaderafterComponent } from './headerafter/headerafter.component';
import { ProfilesettingsComponent } from './profilesettings/profilesettings.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { MytransactionsComponent } from './mytransactions/mytransactions.component';
import { MyaccountsComponent } from './myaccounts/myaccounts.component';
import { StorageServiceModule } from 'angular-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    UserloginComponent,
    CustomerloginComponent,
    HeaderbeforeComponent,
    CustomerhomeComponent,
    HeaderafterComponent,
    ProfilesettingsComponent,
    UserhomeComponent,
    MytransactionsComponent,
    MyaccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
