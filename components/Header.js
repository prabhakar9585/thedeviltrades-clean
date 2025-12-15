import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <img src="/logo.png" alt="Devil Trades Logo" />
          <span>Devil Trades</span>
        </div>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/#indicator">Indicator</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
