import Head from 'next/head';
import { BuyCurrency } from '../components/BuyCurrency';
import { Navbar } from '../components/Navbar';
import { PopularCurrencies } from '../components/PopularCurrencies';

export default function Valuta() {
    {/* TODO: Make layout so that header and footer is the same on all pages*/}
  return (
    <div>
      <Head>
        <title>Valutakalkulator App</title>
      </Head>

      <main>
        <Navbar />
        <h2>Valuta!</h2>
      </main>
      <footer>SpareBank 1 Utvikling</footer>
    </div>
  );
}
