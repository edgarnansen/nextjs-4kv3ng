import { useQuery } from 'react-query';
import { SimpleCurrencyConverter } from './SimpleCurrencyConverter';
import styles from './CurrenciesDashboard.module.css';
import { MoreAdvancedCurrencyConverter } from './MoreAdvancedCurrencyConverter';

const fetchCurrencies = async () => {
  const response = await fetch('/api/integration/currencies');
  return (await response.json()) as string[];
};

export const CurrenciesDashboard = () => {
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
      {data != null && <MoreAdvancedCurrencyConverter currencyCodes={data} />}
    </div>
  );
};
