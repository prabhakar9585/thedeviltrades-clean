import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo-wrap">
          <img src="/logo.png" alt="Devil Trades" />
          <span className="brand-text">DEVIL TRADES</span>
        </div>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>

          <div className="dropdown">
            <span>Indicator ▾</span>
            <div className="dropdown-menu">
              <div className="sub-dropdown">
                <span>THE DEVIL V.3 ▸</span>
                <div className="sub-menu">
                  <Link href="/indicator/devil-v3/profit-trades">Profit Trades</Link>
                  <Link href="/indicator/devil-v3/loss-trades">Loss Trades</Link>
                  <Link href="/indicator/devil-v3/no-trade-days">No Trade Days</Link>
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
