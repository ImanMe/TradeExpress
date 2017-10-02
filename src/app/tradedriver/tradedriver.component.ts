import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData, CompleterItem } from "ng2-completer";
import { HttpClient } from '@angular/common/http';
import { VehicleService } from '../services/vehicle.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tradedriver',
  templateUrl: './tradedriver.component.html',
  styleUrls: ['./tradedriver.component.css']
})
export class TradedriverComponent implements OnInit {

  tradeInValue: Number = 12000;
  savedTradeInValue: Number;
  isCalculated = false;
  isPanel = false;
  isFinalResult = false;
  showVehicleHistory = false;
  pattern = /^[a-zA-Z0-9]{17}$/;
  showSimilarVehicle = true;
  historyDeduction;
  remainingLoan;
  otherDeductions;
  finalTrade;
  vinNumber;
  hasVin: Boolean;
  similarVehicles;
  vehiclesImages = [
    'https://i.ebayimg.com/00/s/NjAwWDgwMA==/z/DC0AAOSwDshZxQlw/$_27.JPG',
    'https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/uvgAAOSwHZ1Zy4m9/$_27.JPG',
    'https://i.ebayimg.com/00/s/NDgwWDY0MA==/z/FSUAAOSwCV5ZyxHu/$_27.JPG',
    'https://i.ebayimg.com/00/s/NDgwWDY0MA==/z/VG0AAOSwlp1Zy1Ox/$_27.JPG',
    'https://i.ebayimg.com/00/s/NjAwWDgwMA==/z/35QAAOSwwVpZywRE/$_27.JPG'
  ]

  searchStr: string;
  captain: string;
  dataService: CompleterData;
  searchData;

  VINmatch() {
    var res = this.searchStr.match(this.pattern);
    if (res.length > 0) {
      console.log('match');
    }
  }

  constructor(private completerService: CompleterService, private http: HttpClient, private vehicleService: VehicleService, private data: DataService, private vinData: VehicleService) {
    vehicleService.getSuggestions().subscribe(v => {
      this.searchData = v;
      this.dataService = completerService.local(this.searchData, 'Specifics', 'Specifics');
      console.log(this.dataService);
    });

  }

  findValue(selected: CompleterItem) {
    if (selected) {
      this.tradeInValue = selected.originalObject.TradeValue;
      this.isCalculated = true;
      this.showSimilarVehicle = false;
      console.log(this.tradeInValue);
    }
  }

  getVinNumber(vinNumber) {
    this.isCalculated = true;
    this.showSimilarVehicle = true;
    this.hasVin = true;
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

  ngOnInit() {

    this.vehicleService.getSimilarVehicles().subscribe(v => {
      this.similarVehicles = v;
      console.log(this.similarVehicles);
    });

    this.data.newTradeInValue.subscribe(tradeInValue => this.tradeInValue = tradeInValue);

    this.data.newServiceVin.subscribe(hasVin => this.hasVin = hasVin);

  }

  saveTradeInValue() {
    this.data.saveTradeInValue(this.tradeInValue);
    console.log(this.tradeInValue);
  }

  getValueByVin() {
    this.vehicleService.getTradeInByVin(this.vinNumber).subscribe(v => {
      this.tradeInValue = v;
      console.log(this.tradeInValue);
      this.data.saveTradeInValue(this.tradeInValue);
    });
  }

  saveVinStatus() {
    this.data.saveVinStatus(this.hasVin);

  }
}