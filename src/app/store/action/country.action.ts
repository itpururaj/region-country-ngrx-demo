import { createAction, props } from '@ngrx/store';
import { CountryDetail } from 'src/app/models/country-detail';
import { SelectListItem } from 'src/app/models/select-list-item';

export const getCountries = createAction(
  'getCountries',
  props<{ countries: CountryDetail[] }>()
);

export const getCountry = createAction(
  'GetCountry',
  props<{ index: number }>()
);