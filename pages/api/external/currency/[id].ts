import { NextApiRequest, NextApiResponse } from 'next';
import { currencies } from '../../../../utils/currency';
import { promises as fs } from 'fs';
import path from 'path';

const loremFile = 'lorem.txt';

export default async function currencyHandler(
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

  const lorem = await fs.readFile(
    path.join(path.resolve('./public'), loremFile),
    'utf-8'
  );

  return res.status(200).json({ ...currency, history: lorem });
}
