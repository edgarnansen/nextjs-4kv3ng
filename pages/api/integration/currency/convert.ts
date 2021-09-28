import { NextApiRequest, NextApiResponse } from 'next';

export default async function convertCurrencyHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { amount, from, to },
    method,
  } = req;

  res.status(501).end('Not implemented');
}
