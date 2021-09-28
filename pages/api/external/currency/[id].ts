import { NextApiRequest, NextApiResponse } from 'next';
import { currencies } from '../../../../utils/currency';
import { promises as fs } from 'fs';
import path from 'path';

const publicFolder = './public';
const loremFile = 'lorem.txt';

const randomFailureRatePercentage = 10;
const shouldFailRandomly = () => {
  const randomPercentage = getRandomNumber(0, 100);
  return randomPercentage < randomFailureRatePercentage;
};

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const randomSlownessRatePercentage = 25;
const responseShouldBeSlow = () => {
  const randomPercentage = getRandomNumber(0, 100);
  return randomPercentage < randomSlownessRatePercentage;
};

const slowBy = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

enum SlowNess {
  A_BIT = 300,
  A_LITTLE = 600,
  A_GREAT_DEAL = 1_000,
  A_LOT = 10_000,
  TOO_MUCH = 30_000,
}

const randomSlowness = async () => {
  const randomPercentage = getRandomNumber(0, 100);
  if (randomPercentage < 50) {
    return slowBy(SlowNess.A_BIT);
  }
  if (randomPercentage < 65) {
    return slowBy(SlowNess.A_LITTLE);
  }
  if (randomPercentage < 80) {
    return slowBy(SlowNess.A_GREAT_DEAL);
  }
  if (randomPercentage < 95) {
    return slowBy(SlowNess.A_LOT);
  }
  return slowBy(SlowNess.TOO_MUCH);
};

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

  if (shouldFailRandomly()) {
    return res.status(500).end('Internal Server Error');
  }

  if (responseShouldBeSlow()) {
    await randomSlowness();
  }

  const currency = currencies.find(
    ({ alphabeticCode }) => id === alphabeticCode
  );

  if (currency == null) {
    return res.status(404).end(`Currency Not Found`);
  }

  const lorem = await fs.readFile(
    path.join(path.resolve(publicFolder), loremFile),
    'utf-8'
  );

  return res.status(200).json({ ...currency, history: lorem });
}
