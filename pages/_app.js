import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Devil Trades</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ================= HEADER ================= */}
      <header className="site-header">
        <div className="header-inner">
          <div className="logo-wrap">
            <img src="/logo.png" alt="Devil Trades Logo" />
            <span className="brand-text">DEVIL TRADES</span>
          </div>

          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>

            <div className="dropdown">
              <span>Indicator ▾</span>
              <div className="dropdown-menu">
                <Link href="/indicator/nifty-50">Nifty 50</Link>
              </div>
            </div>

            <div className="dropdown">
              <span>Purchase ▾</span>
              <div className="dropdown-menu">
                <Link href="/purchase">Indicator</Link>
                <span className="dropdown-item disabled">Trading Bot (Soon)</span>
              </div>
            </div>

            <Link href="/accuracy">Accuracy</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* ================= PAGE CONTENT ================= */}
      <main>
        <Component {...pageProps} />
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        Disclaimer: Trading involves risk. We do not guarantee profits.
        Educational purpose only.
      </footer>
    </>
  );
}
