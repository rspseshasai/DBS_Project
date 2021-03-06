import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { BnNgIdleService } from 'bn-ng-idle';
// import { JwPaginationComponent } from 'jw-angular-pagination';
import { NgxPaginationModule } from 'ngx-pagination';



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
import { TransferfundsComponent } from './transferfunds/transferfunds.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { GetcustidComponent } from './getcustid/getcustid.component';
import { UpdatebyuserComponent } from './updatebyuser/updatebyuser.component';
import { CreateaccountuserComponent } from './createaccountuser/createaccountuser.component';
import { RemoveaccountComponent } from './removeaccount/removeaccount.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportedtransComponent } from './reportedtrans/reportedtrans.component';
import { PopupssComponent } from './popuss/popupss.component';
import { FooterComponent } from './footer/footer.component';
import { PopupComponent } from './popup/popup.component';
import { UserheaderComponent } from './userheader/userheader.component';


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
    MyaccountsComponent,
    TransferfundsComponent,
    CreateaccountComponent,
    GetcustidComponent,
    UpdatebyuserComponent,
    CreateaccountuserComponent,
    RemoveaccountComponent,
    PopupComponent,
    PopupssComponent,
    ReportedtransComponent,
    FooterComponent,
    UserheaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StorageServiceModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[PopupComponent, PopupssComponent]
})
export class AppModule { }
