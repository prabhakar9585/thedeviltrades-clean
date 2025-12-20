import Head from "next/head";
import "../styles/globals.css";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Devil Trades</title>

        {/* ✅ RAZORPAY SDK (REQUIRED) */}
        <script
          src="https://checkout.razorpay.com/v1/checkout.js"
          async
        ></script>
      </Head>

      <Header />

      <Component {...pageProps} />

      <footer className="footer">
        Disclaimer: Trading involves risk. We do not guarantee profits.
        Educational purpose only.
      </footer>
    </>
  );
}
