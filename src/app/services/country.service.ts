import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
//import { Country } from "../models/country.model";
import { SelectListItem } from 'src/app/models/select-list-item';

import { Store } from "@ngrx/store";
import * as CountriesActions from "../store/action/country.action";
import { environment } from "src/environments/environment";
import { CountryDetail } from "../models/country-detail";


@Injectable({ providedIn: "root" })
export class CountryService {
   constructor(
    private http: HttpClient,
    private store: Store<{ countries: CountryDetail[], country: String }>
  ) {}

  getCountries(region: string) {
    const url = `${environment.countriesApiBaseUrl}region/${region}`;

    this.http
      .get(url)
      .pipe(
        map(responseData => {
          const countries: CountryDetail[] = Object.keys(responseData).map(
            key => responseData[key]
          );
          return countries;
        })
      )
      .subscribe(data => {
        this.store.dispatch(CountriesActions.getCountries({ countries: data}));
      });
  }

  getCountry(index: number){
    this.store.dispatch(CountriesActions.getCountry({ index: index}));
  }
}
