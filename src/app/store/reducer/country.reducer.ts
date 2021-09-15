import { Action, createReducer, on } from '@ngrx/store';
import * as CountriesActions from '../action/country.action';
import { SelectListItem } from 'src/app/models/select-list-item';

export const initialState = {
  countries: [],
  country: String
};

export const countriesReducer = createReducer(
  initialState,
  on(CountriesActions.getCountries, (state, { countries }) => ({ 
    ...state,
    countries: countries
  })),
  on(CountriesActions.getCountry, (state, { index }) => ({
    ...state,
    country: state.countries[index]
  }))
);

export function reducer(state: { country: string, countries: SelectListItem[] } | undefined, action: Action){
  return countriesReducer(state, action);
}