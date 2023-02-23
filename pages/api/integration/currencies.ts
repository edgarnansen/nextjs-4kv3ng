import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { externalAPIBase } from '../../../utils/api';
import https from 'https';
import crypto from 'crypto';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO: Fetch from external API to get more currencies.
  // const response = await axios.get(`${externalAPIBase}/currencies`, {});

  res.status(200).json(['NOK', 'BHD', 'EUR', 'GBP']);
};
