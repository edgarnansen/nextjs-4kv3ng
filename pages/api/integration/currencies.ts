import type { NextApiRequest, NextApiResponse } from 'next';
import { externalAPIBase } from '../../../utils/api';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO: Fetch from external API to get more currencies.
  // const response = await fetch(`${externalAPIBase}/currencies`);

  res.status(200).json(['NOK', 'BHD', 'EUR', 'GBP']);
};
