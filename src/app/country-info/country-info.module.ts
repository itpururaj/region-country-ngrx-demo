import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryInfoComponent } from './country-info.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';



@NgModule({
  declarations: [CountryInfoComponent, CountryDetailComponent],
  imports: [
    CommonModule
  ]
})
export class CountryInfoModule { }
