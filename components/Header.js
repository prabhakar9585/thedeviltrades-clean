import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* LOGO */}
        <div className="logo-wrap">
          <img src="/logo.png" alt="Devil Trades Logo" />
          <span className="brand-text">DEVIL TRADES</span>
        </div>

        {/* NAV */}
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>

          {/* INDICATOR DROPDOWN */}
          <div className="dropdown">
            <span className="dropdown-title">Indicator ▾</span>

            <div className="dropdown-menu">
              <div className="sub-dropdown">
                <span className="sub-title">THE DEVIL V.3 ▸</span>

                <div className="sub-menu">
                  <Link href="/indicator/devil-v3/profit-trades">
                    Profit Trades
                  </Link>
                  <Link href="/indicator/devil-v3/loss-trades">
                    Loss Trades
                  </Link>
                  <Link href="/indicator/devil-v3/no-trade-days">
                    No Trade Days
                  </Link>
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
  );
}
