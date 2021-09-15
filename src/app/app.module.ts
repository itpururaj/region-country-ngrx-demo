import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectListComponent } from './select-list/select-list.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { StoreModule } from '@ngrx/store';
import { regionsReducer } from './store/reducer/region.reducer';

import { HttpClientModule } from "@angular/common/http";
import * as countriesReducer from './store/reducer/country.reducer';
import { CountryDetailComponent } from './country-info/country-detail/country-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectListComponent,
    CountryInfoComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      regions: regionsReducer,
      countries: countriesReducer.reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
