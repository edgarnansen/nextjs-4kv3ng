import { NextApiRequest, NextApiResponse } from 'next';
import { currencies } from '../../../../utils/currency';
import lorem from '../../../../utils/lorem';

export default function currencyHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  if (method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }

  const currency = currencies.find(
    ({ alphabeticCode }) => id === alphabeticCode
  );

  if (currency == null) {
    return res.status(404).end(`Currency Not Found`);
  }

  return res.status(200).json({ ...currency, history: lorem });
}
