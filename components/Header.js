import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* LOGO */}
        <div className="logo">
          <img src="/logo.png" alt="Devil Trades" />
          <span>Devil Trades</span>
        </div>

        {/* NAV */}
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>

          {/* INDICATOR DROPDOWN */}
          <div className="dropdown">
            <span className="drop-btn">
              Indicator ▾
            </span>

            <div className="dropdown-content">
              <div className="sub-dropdown">
                <span className="sub-btn">NIFTY 50 ▶</span>

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
  );
}
