import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  loanValue = 0;
  tradeInValue;
  netValue;
  loanStatus;

  constructor(private data: DataService, private vehicleService: VehicleService) { }

  ngOnInit() {
    this.data.currentHaveLoan.subscribe(loanStatus => this.loanStatus = loanStatus);

    if (this.loanStatus) {
      this.vehicleService.getLoan().subscribe(v => {
        this.loanValue = v;
        console.log(this.loanValue);
      });
    }


    this.data.newTradeInValue.subscribe(tradeInValue => this.tradeInValue = tradeInValue);
    console.log(this.tradeInValue);
  }

}
