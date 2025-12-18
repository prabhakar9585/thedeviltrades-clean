import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">

        <div className="logo-wrap">
          <img src="/logo.png" alt="Devil Trades Logo" />
          <span className="brand-text">DEVIL TRADES</span>
        </div>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>

          <div className="dropdown">
            <span>Indicator ▾</span>
            <div className="dropdown-menu">
              <Link href="/indicator/nifty50">NIFTY 50</Link>
            </div>
          </div>

          <div className="dropdown">
            <span>Purchase ▾</span>
            <div className="dropdown-menu">
              <Link href="/purchase/indicator">Indicator</Link>
              <span className="dropdown-item disabled">Trading Bot</span>
            </div>
          </div>

          <Link href="/accuracy">Accuracy</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  )
}
