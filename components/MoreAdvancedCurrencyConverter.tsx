import { useState } from 'react';
import { SimpleCurrencyConverter } from './SimpleCurrencyConverter';

interface MoreAdvancedCurrencyConverterProps {
  currencyCodes: string[];
}

export const MoreAdvancedCurrencyConverter = ({
  currencyCodes,
}: MoreAdvancedCurrencyConverterProps) => {
  const [fromCurrency, setFromCurrency] = useState<string>(currencyCodes[0]);
  const [toCurrency, setToCurrency] = useState<string>(
    currencyCodes[currencyCodes.length - 1]
  );
  const [amount, setAmount] = useState<number>(100);

  return (
    <>
      <form>
        <label htmlFor="currency-from">Fra</label>
        <input
          type="number"
          min={1}
          onChange={(event) => {
            setAmount(parseFloat(event.target.value));
          }}
          defaultValue={amount}
        ></input>
        <select
          name="currency-from"
          onChange={(event) => {
            setFromCurrency(event.target.value);
          }}
          defaultValue={fromCurrency}
        >
          {currencyCodes.map((currencyCode) => (
            <option value={currencyCode} key={currencyCode}>
              {currencyCode}
            </option>
          ))}
        </select>
        <label htmlFor="currency-to">Til</label>
        <select
          name="currency-to"
          onChange={(event) => {
            setToCurrency(event.target.value);
          }}
          defaultValue={toCurrency}
        >
          {currencyCodes.map((currencyCode) => (
            <option value={currencyCode} key={currencyCode}>
              {currencyCode}
            </option>
          ))}
        </select>
        <button type="submit">Konverter</button>
      </form>
      <SimpleCurrencyConverter
        amount={amount}
        from={fromCurrency}
        to={toCurrency}
      />
    </>
  );
};
