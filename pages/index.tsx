import Head from 'next/head';
import { BuyCurrency } from '../components/BuyCurrency';
import { Navbar } from '../components/Navbar';
import { PopularCurrencies } from '../components/PopularCurrencies';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Valutakalkulator App</title>
      </Head>

      <main className={styles.main}>
        {/* TODO: Fix spacing in Navbar, and make Navbar items clickable */}
        <Navbar />

        {/* TODO: Use a semantic tag instead of paragraph for the title. */}
        <p className={styles.title}>Valutakalkulator</p>
        <p className={styles.description}>
          Det beste stedet for å se valutakurser, og å kjøpe valuta
        </p>
        <h2>Populære valutakurser</h2>

        {/* TODO: Convert popular currencies */}
        <PopularCurrencies />

        {/* TODO: Make it possible to buy currency */}
        <BuyCurrency />
      </main>
      {/* TODO: Make content fill available height so that footer is always at the bottom */}
      <footer className={styles.footer}>SpareBank 1 Utvikling</footer>
    </div>
  );
}
