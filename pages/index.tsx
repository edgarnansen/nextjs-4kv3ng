import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { CurrentWeather } from '../components/CurrentWeather';
import { CurrenciesDashboard } from '../components/CurrenciesDashboard';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Valutakalkulator App</title>
      </Head>
      <CurrentWeather />

      <main className={styles.main}>
        <h1 className={styles.title}>Valutakalkulator</h1>

        <p className={styles.description}>
          Her kan du finne valutakurser og konvertere til andre valutaer
        </p>

        <CurrenciesDashboard />
      </main>

      <footer className={styles.footer}>SpareBank 1 Utvikling</footer>
    </div>
  );
}
