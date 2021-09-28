import { FC } from 'react';
import { useQuery } from 'react-query';

interface SimpleCurrencyConverterProps {
  amount: number;
  from: string;
  to: string;
}

export const convertCurrency = async (
  amount: number,
  from: string,
  to: string
) => {
  return '??';
};

export const SimpleCurrencyConverter: FC<SimpleCurrencyConverterProps> = ({
  amount,
  from,
  to,
}) => {
  const { data } = useQuery(`convert-from-${amount}${from}-to-${to}`, () =>
    convertCurrency(amount, from, to)
  );
  return (
    <div>
      {amount} {from} er verdt {data} {to}
    </div>
  );
};
