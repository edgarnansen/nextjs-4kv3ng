import { NextApiRequest, NextApiResponse } from 'next';
import { externalAPIBase } from '../../../../utils/api';
import { Currency, CurrencyCode } from '../../../../utils/currency';
import axios from 'axios';
import axiosRetry from 'axios-retry';

const getCurrency = (currency: CurrencyCode) =>
  axios.get<Currency>(`${externalAPIBase}/currency/${currency}`);

export default async function convertCurrencyHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { amount, from, to },
    method,
  } = req;

  axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay, retries: 100 });

  const result = await Promise.all([
    getCurrency(from as CurrencyCode),
    getCurrency(to as CurrencyCode),
  ]);

  const [{ data: fromCurrency }, { data: toCurrency }] = result;

  const conversionRate =
    fromCurrency.conversionRates[toCurrency.alphabeticCode];

  res.status(200).json({
    amount,
    from: fromCurrency,
    to: toCurrency,
    result:
      conversionRate * parseFloat(Array.isArray(amount) ? amount[0] : amount),
  });
}
