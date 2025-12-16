import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" className="logo" alt="Devil Trades" />
        <span className="brand">Devil Trades</span>
      </div>

      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>

        <div className="dropdown">
          <span>Indicator ▾</span>
          <div className="dropdown-menu">
            <Link href="/indicator">Nifty 50</Link>
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
