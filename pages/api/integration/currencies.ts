import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { externalAPIBase } from '../../../utils/api';
import https from 'https';
import crypto from 'crypto';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await axios.get(`${externalAPIBase}/currencies`, {
    httpsAgent: new https.Agent({
      secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
    }),
  });
  res.status(200).json(response.data);
};
