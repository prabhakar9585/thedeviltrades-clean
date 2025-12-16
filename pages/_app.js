import "../styles/globals.css";
import Link from "next/link";

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

          {/* INDICATOR MENU */}
          <div className="dropdown">
            <span className="dropbtn">Indicator ▸</span>

            <div className="dropdown-content">
              <div className="sub-dropdown">
                <span>NIFTY 50 ▸</span>

                <div className="sub-dropdown-content">
                  <Link href="/indicator/profit">Profit Trades</Link>
                  <Link href="/indicator/loss">Loss Trades</Link>
                  <Link href="/indicator/notrade">No Trade Days</Link>
                </div>
              </div>
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
