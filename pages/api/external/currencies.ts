import { NextApiRequest, NextApiResponse } from 'next';
import { currencies } from '../../../utils/currency';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(currencies.map(({ alphabeticCode: code }) => code));
}
