import { NextApiRequest, NextApiResponse } from 'next';

export default async function currencyHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  res.status(501).end('Not implemented');
}
