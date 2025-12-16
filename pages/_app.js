import "../styles/globals.css";
import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* HEADER */}
      <header className="main-header">
        <div className="header-inner">
          <div className="logo-wrap">
            <img src="/logo.png" alt="Devil Trades Logo" />
            <span>Devil Trades</span>
          </div>

          <nav className="nav-menu">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>

            {/* Indicator Dropdown */}
            <div className="dropdown">
              <span className="drop-btn">Indicator ▾</span>
              <div className="dropdown-menu">
                <div className="dropdown-sub">
                  <span className="sub-btn">NIFTY 50 ▸</span>
                  <div className="sub-menu">
                    <Link href="/indicator/profits">Profit Trades</Link>
                    <Link href="/indicator/losses">Loss Trades</Link>
                    <Link href="/indicator/notrades">No Trade Days</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/accuracy">Accuracy</Link>
            <Link href="/purchase">Purchase</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <Component {...pageProps} />

      {/* FOOTER */}
      <footer className="main-footer">
        <p>
          ⚠️ <strong>Disclaimer:</strong> Trading involves risk. We do not promise
          profits. All screenshots are for educational purposes only.
        </p>
        <p>© {new Date().getFullYear()} Devil Trades. All Rights Reserved.</p>
      </footer>
    </>
  );
}
