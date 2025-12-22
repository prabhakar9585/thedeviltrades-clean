export default function Home() {
  return (
    <div className="home-hero">
      {/* 🔥 MOBILE IMAGE FIX (desktop still uses background-image) */}
      <img
        src="/devil-bg.jpg"
        alt="Devil Trades"
        className="mobile-hero-img"
      />

      <div className="home-bottom-text">
        <p>We don’t promise profits.</p>
        <p>We teach discipline, psychology & real market strategy.</p>
      </div>
    </div>
  );
}
