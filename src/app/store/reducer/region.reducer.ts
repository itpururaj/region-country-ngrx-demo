import {Action, createReducer, on} from '@ngrx/store';
import * as RegionActions from '../action/region.actions';
import { SelectListItem } from 'src/app/models/select-list-item';

export interface RegionState {
  selectListItems: SelectListItem[];
}

export const initialState: RegionState = {
  selectListItems: [new SelectListItem('Europe'), new SelectListItem('Asia')]
};

export const regionsReducer = createReducer(
  initialState,
  on(RegionActions.loadRegions,
    (state: RegionState) =>
      ({...state,
        selectListItems: [...state.selectListItems]
      }))
);

export function reducer(state: RegionState | undefined, action: Action): any {
  return regionsReducer(state, action);
}
