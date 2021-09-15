import { createAction, props } from '@ngrx/store';
import { SelectListItem } from 'src/app/models/select-list-item';

export const loadRegions = createAction(
  '[SelectListItem] loadRegions'
);