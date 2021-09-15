import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryInfoComponent } from './country-info.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import {
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import { StoreModule } from "@ngrx/store";
import { regionsReducer } from "../store/reducer/region.reducer";
import { countriesReducer } from "../store/reducer/country.reducer";

describe('RegionsComponent', () => {
  let component: CountryInfoComponent;
  let fixture: ComponentFixture<CountryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,

        StoreModule.forRoot({
          regions: regionsReducer,
          countries: countriesReducer
        })
      ],
      declarations: [CountryInfoComponent],

      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have selected country to be null initially", () => {
    expect(component.selectedCountry).toEqual(undefined);
  });

  it("should set selected country to be null when region is selected", () => {
    component.onRegionSelection("Asia");
    expect(component.selectedCountry).toEqual(undefined);
  });
});
