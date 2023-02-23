import { useState } from 'react';
import styles from './BuyCurrency.module.css';

export const BuyCurrency = () => {
  const [amount, setAmount] = useState<number>(100);

  // TODO: fetch currencies
  const currencies: string[] = ['NOK', 'NOK', 'NOK'];

  return (
    <>
      {/* TODO: style title*/}
      <p>Kjøp valuta:</p>

      <div className={styles.form}>
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
            // TODO: update state on select
          }}
        >
          {currencies.map((currencyCode) => (
            <option value={currencyCode} key={currencyCode}>
              {currencyCode}
            </option>
          ))}
        </select>
      </div>

      <p>Pris: ??</p>

      {/*TODO: fix contrast, submit on click*/}
      <button className={styles.submitButton}>Kjøp</button>
    </>
  );
};
