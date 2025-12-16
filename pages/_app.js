import Link from "next/link";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Devil Trades" />
          <span>Devil Trades</span>
        </div>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>

          {/* INDICATOR DROPDOWN */}
          <div className="dropdown">
            <span className="dropbtn">Indicator ▾</span>
            <div className="dropdown-content">
              <Link href="/indicator">NIFTY 50</Link>
            </div>
          </div>

          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <Component {...pageProps} />
    </>
  );
}
