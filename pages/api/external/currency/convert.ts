import { NextApiRequest, NextApiResponse } from 'next';
import { externalAPIBase } from '../../../../utils/api';
import { Currency, CurrencyCode } from '../../../../utils/currency';

const getCurrency = async (currency: CurrencyCode) => {
  const response = await fetch(`${externalAPIBase}/currency/${currency}`);
  // TODO: Error handling? Type assertions?
  return (await response.json()) as Currency;
};

export default async function convertCurrencyHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { amount, from, to },
    method,
  } = req;

  const result = await Promise.all([
    getCurrency(from as CurrencyCode),
    getCurrency(to as CurrencyCode),
  ]);

  const [fromCurrency, toCurrency] = result;

  const conversionRate =
    fromCurrency.conversionRates[toCurrency.alphabeticCode];

  const amountToConvert = Array.isArray(amount) ? amount[0] : amount ?? '0';

  res.status(200).json({
    amount: amountToConvert,
    from: fromCurrency,
    to: toCurrency,
    result: conversionRate * parseFloat(amountToConvert),
  });
}
