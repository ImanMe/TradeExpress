import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData, CompleterItem } from "ng2-completer";

@Component({
  selector: 'app-type-head-demo',
  templateUrl: './type-head-demo.component.html',
  styleUrls: ['./type-head-demo.component.css']
})
export class TypeHeadDemoComponent {
  tradeInValue = 12000;
  isCalculated = false;
  isPanel = false;
  isFinalResult = false;
  historyDeduction;
  remainingLoan;
  otherDeductions;
  finalTrade;

  searchStr: string;
  captain: string;
  dataService: CompleterData;
  searchData = [
    { color: '2015 Acura ILX Base 4D Sedan at', value: 14130 },
    { color: '2015 Acura ILX Dynamic 4D Sedan 6sp', value: 17030 },
    { color: '2015 Acura ILX IMA 4D Sedan at', value: 20030 },
    { color: '2015 Acura ILX Premium 4D Sedan at', value: 16430 },
  ];

  constructor(private completerService: CompleterService) {
    this.dataService = completerService.local(this.searchData, 'color', 'color');
  }

  findValue(selected: CompleterItem) {
    console.log(selected.originalObject.value);
    this.tradeInValue = selected.originalObject.value;
    this.isCalculated = true;
  }


  getVin() {
    this.isPanel = true;
  }

  getLoanRemaining() {
    this.isFinalResult = true;
    this.historyDeduction = Math.floor(Math.random() * (1100 - 700 + 1) + 700);
    this.remainingLoan = Math.floor(Math.random() * (1100 - 700 + 1) + 700);
    this.otherDeductions = 170;
    //this.finalTrade = (this.tradeInValue) - Number(this.historyDeduction) - Number(this.remainingLoan) - Number(this.otherDeductions);


  }

  ngDoCheck() {
    console.log('v', this.searchData);
    console.log(this.dataService);
  }

}
