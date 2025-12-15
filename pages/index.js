export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo-wrap">
          <img src="/logo.png" alt="Devil Trades Logo" />
          <span>Devil Trades</span>
        </div>

        <nav>
          <a className="active">Home</a>
          <a href="/courses">Courses</a>
          <a href="#indicator">Indicator</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <h1>
          Learn Trading <br /> & Build Wealth
        </h1>

        <p>
          We don’t promise profits.  
          We teach discipline, psychology, and real market strategy.
        </p>

        <div className="hero-buttons">
          <a className="btn-primary" href="/courses">Browse Courses</a>
          <a className="btn-outline" href="#indicator">View Indicator</a>
        </div>

        <small className="trust-line">
          📈 Education First • No Fake Promises • Long-Term Discipline
        </small>
      </section>
    </>
  );
}
