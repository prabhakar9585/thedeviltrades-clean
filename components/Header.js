import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" className="logo" />
        <span className="brand">Devil Trades</span>
      </div>

      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>

        <div className="dropdown">
          <span>Indicator ▾</span>
          <div className="dropdown-menu">
            <div className="sub-dropdown">
              <span>NIFTY 50 ▸</span>
              <div className="sub-menu">
                <Link href="/indicator/profit">Profit Trades</Link>
                <Link href="/indicator/loss">Loss Trades</Link>
                <Link href="/indicator/notrade">No Trade Days</Link>
              </div>
            </div>
          </div>
        </div>

        <Link href="/accuracy">Accuracy</Link>
        <Link href="/purchase">Purchase</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
