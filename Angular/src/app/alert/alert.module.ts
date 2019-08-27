import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { GetCustIdComponent } from './get-cust-id/get-cust-id.component';



@NgModule({
  declarations: [AlertComponent, GetCustIdComponent],
  imports: [
    CommonModule
  ]
})
export class AlertModule { }
