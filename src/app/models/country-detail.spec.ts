import { CountryDetail } from './country-detail';

describe('CountryDetail', () => {
  it('should create an instance', () => {
  expect(new CountryDetail('UK', 'London', '6.5m', 'GBP', 'UKFlagURL')).toBeTruthy();
  });
});
