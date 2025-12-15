import Link from "next/link";

export default function Home() {
  return (
    <main className="hero">
      <h1>
        Learn Trading <br /> & Build Wealth
      </h1>

      <p>
        We don’t promise profits.  
        We teach discipline, psychology, and real market strategy.
      </p>

      <div className="buttons">
        <Link href="/courses" className="btn primary">
          Browse Courses
        </Link>

        <a href="#indicator" className="btn outline">
          View Indicator
        </a>
      </div>
    </main>
  );
}
<section id="indicator" className="indicator">
  <h2>Our Indicator Logic</h2>
  <p className="subtitle">
    Trading is not about winning every day.  
    It’s about discipline and risk control.
  </p>

  <div className="indicator-grid">
    <div className="card">
      <h3>📈 Profit Trades</h3>
      <p>High probability setups with clear entry and exit.</p>
    </div>

    <div className="card">
      <h3>📉 Loss Trades</h3>
      <p>Losses are part of the game. We teach risk management.</p>
    </div>

    <div className="card">
      <h3>⛔ No Trade Days</h3>
      <p>Capital protection is also a strategy.</p>
    </div>
  </div>
</section>
