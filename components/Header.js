import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showIndicator, setShowIndicator] = useState(false);
  const [showNifty, setShowNifty] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">

        {/* LOGO */}
        <div className="logo">
          <img src="/logo.png" alt="Devil Trades" />
          <span className="brand-text">Devil Trades</span>
        </div>

        {/* NAVIGATION */}
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>

          {/* INDICATOR LEVEL 1 */}
          <div
            className="nav-item"
            onMouseEnter={() => setShowIndicator(true)}
            onMouseLeave={() => {
              setShowIndicator(false);
              setShowNifty(false);
            }}
          >
            <span className="nav-link">Indicator ▾</span>

            {showIndicator && (
              <div className="dropdown level-1">
                <div
                  className="dropdown-item"
                  onMouseEnter={() => setShowNifty(true)}
                >
                  NIFTY 50 ▸
                </div>

                {/* LEVEL 2 */}
                {showNifty && (
                  <div className="dropdown level-2">
                    <Link href="/indicator/profits">Profit Trades</Link>
                    <Link href="/indicator/losses">Loss Trades</Link>
                    <Link href="/indicator/notrades">No Trade Days</Link>
                  </div>
                )}
              </div>
            )}
          </div>

          <Link href="/accuracy">Accuracy</Link>
          <Link href="/purchase">Purchase</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
