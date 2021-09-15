import * as fromRegions from './region.actions';

describe('loadCustomers', () => {
  it('should return an action', () => {
    expect(fromRegions.loadRegions().type).toBe('[SelectListItem] loadRegions');
  });
});