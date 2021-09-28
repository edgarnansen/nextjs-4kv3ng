export enum CurrencyCode {
  BHD = 'BHD',
  EUR = 'EUR',
  GBP = 'GBP',
  NOK = 'NOK',
  USD = 'USD',
}

export interface Currency {
  alphabeticCode: CurrencyCode;
  minorUnit: number;
  name: String;
  symbol: String;
}

const BHD: Currency = {
  alphabeticCode: CurrencyCode.BHD,
  minorUnit: 3,
  name: 'Dīnār Baḥrēnī',
  symbol: 'BD',
};
const EUR: Currency = {
  alphabeticCode: CurrencyCode.EUR,
  minorUnit: 2,
  name: 'Euro',
  symbol: '€',
};
const GBP: Currency = {
  alphabeticCode: CurrencyCode.GBP,
  minorUnit: 2,
  name: 'Pound sterling',
  symbol: '£',
};
const NOK: Currency = {
  alphabeticCode: CurrencyCode.NOK,
  minorUnit: 2,
  name: 'Norwegian krone',
  symbol: 'kr',
};
const USD: Currency = {
  alphabeticCode: CurrencyCode.USD,
  minorUnit: 2,
  name: 'United States Dollar',
  symbol: '$',
};

export const currencies = [BHD, EUR, GBP, NOK, USD];
