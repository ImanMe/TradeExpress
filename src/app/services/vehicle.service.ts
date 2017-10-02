import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class VehicleService {

  constructor(public http: Http) { }

  getSuggestions() {
    return this.http.get('https://81a9dgrqxi.execute-api.ca-central-1.amazonaws.com/Prod/GetSuggestions')
      .map(res => res.json());
  }

  getSimilarVehicles() {
    return this.http.get('https://81a9dgrqxi.execute-api.ca-central-1.amazonaws.com/Prod/GetSimilarVehicles')
      .map(res => res.json());
  }

  getLoan() {
    return this.http.get('https://81a9dgrqxi.execute-api.ca-central-1.amazonaws.com/Prod/GetPayoutQuote')
      .map(res => res.json());
  }

  getTradeInByVin(vin) {
    console.log(vin);
    return this.http.get('https://81a9dgrqxi.execute-api.ca-central-1.amazonaws.com/Prod/GetVehicle/' + vin)
      .map(res => res.json());

  }

}
