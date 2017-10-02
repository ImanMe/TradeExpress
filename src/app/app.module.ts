import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";


import { AppComponent } from './app.component';

import { Ng2CompleterModule } from 'ng2-completer';
import { TypeHeadDemoComponent } from './type-head-demo/type-head-demo.component';
import { TradedriverComponent } from './tradedriver/tradedriver.component';
import { PaypalComponent } from './paypal/paypal.component';
import { VehicleHistoryComponent } from './vehicle-history/vehicle-history.component';
import { POQComponent } from './poq/poq.component';
import { SummaryComponent } from './summary/summary.component';
import { HttpClientModule } from '@angular/common/http';
import { GetVINComponent } from './get-vin/get-vin.component';
import { VehicleService } from './services/vehicle.service';
import { DataService } from './services/data.service';
import { Http } from '@angular/Http';
import { BrowserXhr } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HaveLoanComponent } from './have-loan/have-loan.component';


const appRoutes: Routes = [
  { path: 'demo', component: TypeHeadDemoComponent },
  { path: '', component: TradedriverComponent },
  { path: 'paypal', component: PaypalComponent },
  { path: 'vehiclehistory', component: VehicleHistoryComponent },
  { path: 'poq', component: POQComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'getVin', component: GetVINComponent },
  { path: 'haveloan', component: HaveLoanComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TypeHeadDemoComponent,
    TradedriverComponent,
    PaypalComponent,
    VehicleHistoryComponent,
    POQComponent,
    SummaryComponent,
    GetVINComponent,
    HaveLoanComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2CompleterModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,

  ],
  providers: [VehicleService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
