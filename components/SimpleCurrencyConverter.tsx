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
  // TODO: How?
  return '??';
};

export const SimpleCurrencyConverter = ({
  amount,
  from,
  to,
}: SimpleCurrencyConverterProps) => {
  const { data } = useQuery(`convert-from-${amount}${from}-to-${to}`, () =>
    convertCurrency(amount, from, to)
  );
  return (
    <div>
      {amount} {from} er verdt {data} {to}
    </div>
  );
};
