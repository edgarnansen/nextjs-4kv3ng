# nextjs-4kv3ng

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/nextjs-4kv3ng)

# API

This application exposes an "external" api with three endpoints

## /api/external/currency/:id

Where `id` is a CurrencyCode

Returns an object

```typescript
{
  alphabeticCode: CurrencyCode;
  exponent: number;
  name: string;
  symbol: string;
  introductionYear: number;
  isCrypto: boolean;
  countryOfOrigin?: CountryCode;
  conversionRates: ConversionRates;
  history?: string;
}
```

example:

```http
GET {{host}}/api/external/currency/BHD
```

## /api/external/currency/convert

Requires query params `from`, `to` and `amount`, where `from` and `to` are CurrencyCodes while `amount` is a number.

Returns an object

```typescript
 { from: CurrencyCode, to: CurrencyCode, amount: number, result: number }
```

example:

```http
GET {{host}}/api/external/currency/convert?from=NOK&to=EUR&amount=100
```

## /api/external/currencies

Returns a list of supported currency codes

example:

```http
GET {{host}}/api/external/currencies
```
