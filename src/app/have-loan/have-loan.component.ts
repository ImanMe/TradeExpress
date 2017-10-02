import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-have-loan',
  templateUrl: './have-loan.component.html',
  styleUrls: ['./have-loan.component.css']
})
export class HaveLoanComponent implements OnInit {

  loanStatus: Boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentHaveLoan.subscribe(loanStatus => this.loanStatus = loanStatus);
  }

  changeLoanStatus() {
    if (this.loanStatus == false) {
      this.data.changeLoanStatus(true);
    } else {
      this.data.changeLoanStatus(false);
    }
  }


}
