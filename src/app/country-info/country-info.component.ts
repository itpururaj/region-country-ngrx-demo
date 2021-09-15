import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountryDetail } from '../models/country-detail';
import { SelectListItem } from '../models/select-list-item';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {
  regions$: Observable<{ selectListItems: SelectListItem[] }>;
  regionsList: string[] = [];

  countries$: Observable<{ countries: CountryDetail[] }>;
  filteredCountries: string[] = [];
  selectedCountry: CountryDetail;

  constructor(
    private countryService: CountryService,
    private regionStore: Store<{ regions: { selectListItems: SelectListItem[] }}>,
    private countryStore: Store<{ countries: { countries: CountryDetail[] } }>) {
  }

  ngOnInit(): void {
    this.regions$ = this.regionStore.pipe(select('regions'));

    this.regions$.subscribe(regions => {
      regions.selectListItems.map(item => 
             this.regionsList.push(item.name)
           )
      });

    this.countries$ = this.countryStore.pipe(select("countries"));
    this.countries$.subscribe(countries => {
      countries.countries.map(country => {
        this.filteredCountries.push(country.name);
      })
    });
  }

  onRegionSelection(region: string) {
    this.filteredCountries = [];
    if (region) {
      this.countryService.getCountries(region);
    }
  }

  onCountrySelection(countryName:string) {
    this.selectedCountry = null;
    if(countryName){
      this.countries$.subscribe(countries => {
        this.selectedCountry = countries.countries.filter(country => country.name === countryName)[0]
      });
    }
  }
}

