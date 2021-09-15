import { TestBed } from "@angular/core/testing";

import { CountryService } from "./country.service";
import {
  HttpClientTestingModule
} from "@angular/common/http/testing";
import { StoreModule, Store } from "@ngrx/store";
import { regionsReducer } from "../store/reducer/region.reducer";
import { countriesReducer } from "../store/reducer/country.reducer";

describe("CountryService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({
          regions: regionsReducer,
          countries: countriesReducer
        })
      ]
    })
  );

  it("should be created", () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service).toBeTruthy();
  });

  it("should get countries list on getCountries", () => {
    const service: CountryService = TestBed.get(CountryService);
    service.getCountries("Asia");
  });

  it("should dispatch getCountry action on getCountry", () => {
    const service: CountryService = TestBed.get(CountryService);
    service.getCountry(0);
  });
});
