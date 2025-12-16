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
  <a href="/">Home</a>
  <a href="/courses">Courses</a>
  <a href="/indicator">Indicator</a>
  <a href="/accuracy">Accuracy</a>
  <a href="/purchase">Purchase</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>
      </div>
    </header>
  );
}
