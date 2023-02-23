import { NextApiRequest, NextApiResponse } from 'next';

export default async function convertCurrencyHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { amount, from, to },
    method,
  } = req;
  // TODO: Fetch from external API to get conversion rates
  const PLACEHOLDER_NOK_CONVERSION_RATES = { BHD: 1, EUR: 1, GBP: 1 };

  if (to !== 'NOK') {
    return res.status(501).end('Not implemented');
  }

  return res.status(200).json({
    value:
      Number(amount) *
      PLACEHOLDER_NOK_CONVERSION_RATES[
        from as keyof typeof PLACEHOLDER_NOK_CONVERSION_RATES
      ],
  });
}
