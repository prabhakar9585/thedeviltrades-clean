export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo-wrap">
          <img src="/logo.png" alt="Devil Trades" />
          <span className="brand-text">DEVIL TRADES</span>
        </div>

        <nav className="nav">
          <a href="/">Home</a>
          <a href="/courses">Courses</a>

          <div className="dropdown">
            <span>Indicator ▾</span>
            <div className="dropdown-menu">
              <a href="#">Coming Soon</a>
            </div>
          </div>

          <div className="dropdown">
            <span>Purchase ▾</span>
            <div className="dropdown-menu">
              <a href="/purchase">Indicator</a>
              <a href="#">Trading Bot</a>
            </div>
          </div>

          <a href="/accuracy">Accuracy</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
