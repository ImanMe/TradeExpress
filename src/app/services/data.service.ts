import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private haveLoan = new BehaviorSubject<Boolean>(false);
  currentHaveLoan = this.haveLoan.asObservable();

  private serviceTradeInValue = new BehaviorSubject<Number>(0);
  newTradeInValue = this.serviceTradeInValue.asObservable();

  constructor() { }

  changeLoanStatus(loanStatus: boolean) {
    this.haveLoan.next(loanStatus);
  }

  saveTradeInValue(savedTradeInValue: Number) {
    this.serviceTradeInValue.next(savedTradeInValue);
  }

  private serviceVin = new BehaviorSubject<Boolean>(false);
  newServiceVin = this.serviceVin.asObservable();

  saveVinStatus(hasVin: Boolean) {
    this.serviceVin.next(hasVin);
  }

}
