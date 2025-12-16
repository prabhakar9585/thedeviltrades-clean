import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showIndicator, setShowIndicator] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">

        {/* LOGO */}
        <div className="logo">
          <img src="/logo.png" alt="Devil Trades" />
          <span className="brand-text">Devil Trades</span>
        </div>

        {/* NAV */}
        <nav className="nav">

          <Link href="/">Home</Link>

          <Link href="/courses">Courses</Link>

          {/* INDICATOR */}
          <div
            className="nav-item"
            onMouseEnter={() => setShowIndicator(true)}
            onMouseLeave={() => setShowIndicator(false)}
          >
            <Link href="/indicator" className="nav-link">
              Indicator ▾
            </Link>

            {showIndicator && (
              <div className="indicator-dropdown">
                <Link href="/indicator">NIFTY 50</Link>
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
