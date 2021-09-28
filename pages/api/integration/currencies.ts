import type { NextApiRequest, NextApiResponse } from 'next';
import { externalAPIBase } from '../../../utils/api';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(`${externalAPIBase}/currencies`);
  const result = await response.json();
  res.status(200).json(result);
};
