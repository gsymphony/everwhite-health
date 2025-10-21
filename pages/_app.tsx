import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>EverWhite Health</title>
        <meta
          name="description"
          content="Experience high-end dental wellness at EverWhite Health. Our modern, boutique practice pairs advanced technology with comfort and luxury."
        />
        <meta name="keywords" content="dentist, dental wellness, smile center, teeth whitening, Burbank" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-24">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
