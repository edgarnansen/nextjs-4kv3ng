import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { externalAPIBase } from '../../../utils/api';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await axios.get(`${externalAPIBase}/currencies`);
  res.status(200).json(response.data);
};
