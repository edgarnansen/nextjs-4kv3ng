import type { NextApiRequest, NextApiResponse } from 'next';
import { weatherAPIBase } from '../../../utils/api';
import axios from 'axios';
import BottleNeck from 'bottleneck';
import https from 'https';
import crypto from 'crypto';

const limiter = new BottleNeck({
  minTime: 50,
  maxConcurrent: 1,
});

const getWeather = (lat: string, lon: string) =>
  axios.get(`${weatherAPIBase}`, {
    httpsAgent: new https.Agent({
      secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
    }),
    params: {
      lat,
      lon,
    },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': 'WeatherTestApp github.com/edgarnansen',
    },
  });

export default async (
  { query: { lat, lon } }: NextApiRequest,
  res: NextApiResponse
) => {
  const response = await limiter.schedule(() =>
    getWeather(lat as string, lon as string)
  );
  res.status(200).json({
    symbolCode:
      response.data.properties.timeseries[0].data.next_1_hours.summary
        .symbol_code,
  });
};
