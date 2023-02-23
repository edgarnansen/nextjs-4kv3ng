import { useQuery } from 'react-query';
import { SimpleCurrencyConverter } from './SimpleCurrencyConverter';
import styles from './PopularCurrencies.module.css';

const fetchCurrencies = async () => {
  const response = await fetch('/api/integration/currencies');
  return (await response.json()) as string[];
};

export const PopularCurrencies = () => {
  const { data } = useQuery('currencies', fetchCurrencies);

  return (
    <div className={styles.container}>
      {data?.map((currencyCode) => (
        <SimpleCurrencyConverter
          amount={1}
          key={currencyCode}
          from={currencyCode}
          to="NOK"
        />
      ))}
    </div>
  );
};
