import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* LOGO */}
        <div className="logo-wrap">
          <img src="/logo.png" alt="Devil Trades" />
          <span className="brand-text">DEVIL TRADES</span>
        </div>

        {/* NAV */}
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>

          {/* INDICATOR SLIDE */}
          <div className="dropdown">
            <span>Indicator ▾</span>
            <div className="dropdown-menu">
              <div className="sub-dropdown">
                <span>NIFTY 50 ▸</span>
                <div className="sub-menu">
                  <Link href="/indicator/profits">Profit Trades</Link>
                  <Link href="/indicator/losses">Loss Trades</Link>
                  <Link href="/indicator/notrades">No Trade Days</Link>
                </div>
              </div>
            </div>
          </div>

          {/* PURCHASE SLIDE (NEW) */}
          <div className="dropdown">
            <span>Purchase ▾</span>
            <div className="dropdown-menu">
              <div className="sub-dropdown">
                <span>Indicator ▸</span>
                <div className="sub-menu">
                  <Link href="/purchase/devil-v3">THE DEVIL V3</Link>
                </div>
              </div>

              <div className="dropdown-item disabled">
                Trading Bot (Coming Soon)
              </div>
            </div>
          </div>

          <Link href="/accuracy">Accuracy</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
