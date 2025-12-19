import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* GLOBAL META */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Devil Trades</title>
      </Head>

      {/* 🔴 REQUIRED: Razorpay SDK */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="beforeInteractive"
      />

      {/* HEADER */}
      <Header />

      {/* PAGE CONTENT */}
      <Component {...pageProps} />

      {/* FOOTER */}
      <footer className="footer">
        Disclaimer: Trading involves risk. We do not guarantee profits.
        Educational purpose only.
      </footer>
    </>
  );
}
