import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-vehicle-history',
  templateUrl: './vehicle-history.component.html',
  styleUrls: ['./vehicle-history.component.css']
})
export class VehicleHistoryComponent implements OnInit {

  loanStatus: Boolean;
  hasVin: Boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentHaveLoan.subscribe(loanStatus => this.loanStatus = loanStatus);
    this.data.newServiceVin.subscribe(hasVin => this.hasVin = hasVin);
  }

  changeLoanStatus() {
    if (this.loanStatus == false) {
      this.data.changeLoanStatus(true);
    } else {
      this.data.changeLoanStatus(false);
    }
  }

}
