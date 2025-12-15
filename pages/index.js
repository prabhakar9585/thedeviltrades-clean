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
<footer id="contact" className="footer">
  <div className="footer-content">
    <h3>The Devil Trades</h3>

    <p className="footer-tagline">
      Trade with discipline. Not emotions.
    </p>

    <div className="footer-contact">
      <p>📞 WhatsApp: <strong>95856 78489</strong></p>
      <p>📧 Email: support@thedeviltrades.com</p>
    </div>

    <div className="disclaimer">
      <h4>Disclaimer</h4>
      <p>
        Trading in financial markets involves risk.  
        The Devil Trades does not provide guaranteed profits.
        All content is for educational purposes only.
        Users are responsible for their own trading decisions.
      </p>
    </div>

    <p className="copyright">
      © {new Date().getFullYear()} The Devil Trades. All rights reserved.
    </p>
  </div>
</footer>
