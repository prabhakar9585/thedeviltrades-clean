import Head from "next/head";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Site Title */}
        <title>Devil Trades</title>

        {/* Meta */}
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Devil Trades – Discipline, Psychology & Real Market Strategy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Razorpay Script */}
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Head>

      {/* Global Header */}
      <Header />

      {/* Page Content */}
      <Component {...pageProps} />

      {/* Global Footer */}
      <Footer />
    </>
  );
}
