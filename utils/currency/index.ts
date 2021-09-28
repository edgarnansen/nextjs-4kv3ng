export enum CurrencyCode {
  BHD = 'BHD',
  EUR = 'EUR',
  GBP = 'GBP',
  JPY = 'JPY',
  NOK = 'NOK',
  USD = 'USD',
}

export enum CountryCode {
  BH = 'Bahrain',
  GB_ENG = 'England',
  NO = 'Norway',
  JP = 'Japan',
  US = 'United States',
}

type ConversionRates = {
  [code in keyof typeof CurrencyCode]: number;
};

export interface Currency {
  alphabeticCode: CurrencyCode;
  exponent: number;
  name: string;
  symbol: string;
  introductionYear: number;
  isCrypto: boolean;
  countryOfOrigin?: CountryCode;
  conversionRates: ConversionRates;
}

const BHD: Currency = {
  alphabeticCode: CurrencyCode.BHD,
  exponent: 3,
  name: 'Dīnār Baḥrēnī',
  symbol: 'BD',
  isCrypto: false,
  countryOfOrigin: CountryCode.BH,
  introductionYear: 1965,
  conversionRates: {
    BHD: 1.0,
    EUR: 2.2772404,
    GBP: 1.9637162,
    JPY: 296.49973,
    NOK: 22.986093,
    USD: 2.6595745,
  },
};
const EUR: Currency = {
  alphabeticCode: CurrencyCode.EUR,
  exponent: 2,
  name: 'Euro',
  symbol: '€',
  isCrypto: false,
  introductionYear: 1999,
  conversionRates: {
    BHD: 0.43911894,
    EUR: 1.0,
    GBP: 0.86227807,
    JPY: 130.21196,
    NOK: 10.092985,
    USD: 1.1677356,
  },
};
const GBP: Currency = {
  alphabeticCode: CurrencyCode.GBP,
  exponent: 2,
  name: 'Pound sterling',
  symbol: '£',
  isCrypto: false,
  introductionYear: 1158,
  countryOfOrigin: CountryCode.GB_ENG,
  conversionRates: {
    BHD: 0.50922622,
    EUR: 1.1597614,
    GBP: 1.0,
    JPY: 151.03931,
    NOK: 11.69829,
    USD: 1.3540908,
  },
};
const JPY: Currency = {
  alphabeticCode: CurrencyCode.JPY,
  exponent: 0,
  name: 'Japanese Yen',
  symbol: '¥',
  isCrypto: false,
  introductionYear: 1869,
  countryOfOrigin: CountryCode.JP,
  conversionRates: {
    BHD: 0.0033708646,
    EUR: 0.0076778078,
    GBP: 0.0066208062,
    JPY: 1.0,
    NOK: 0.077451302,
    USD: 0.0089650654,
  },
};
const NOK: Currency = {
  alphabeticCode: CurrencyCode.NOK,
  exponent: 2,
  name: 'Norwegian krone',
  symbol: 'kr',
  isCrypto: false,
  introductionYear: 1875,
  countryOfOrigin: CountryCode.NO,
  conversionRates: {
    BHD: 0.043522375,
    EUR: 0.099138197,
    GBP: 0.08550077,
    JPY: 0.08550077,
    NOK: 1.0,
    USD: 0.11576246,
  },
};
const USD: Currency = {
  alphabeticCode: CurrencyCode.USD,
  exponent: 2,
  name: 'United States Dollar',
  symbol: '$',
  introductionYear: 1792,
  isCrypto: false,
  countryOfOrigin: CountryCode.US,
  conversionRates: {
    BHD: 0.376975,
    EUR: 0.85639333,
    GBP: 0.73866919,
    JPY: 111.55723,
    NOK: 8.6380147,
    USD: 1.0,
  },
};

export const toMinor = (major: number, exponent: number) =>
  Math.round(major * Math.pow(10, exponent));
export const toMajor = (minor: number, exponent: number) =>
  Math.round(minor / Math.pow(10, exponent));

export const currencies = [BHD, EUR, GBP, NOK, USD];
