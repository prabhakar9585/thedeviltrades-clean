export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/devil-bg.jpg')",
        }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">WELCOME BACK</h1>

          <p className="hero-subtitle">
            We don’t promise profits. <br />
            We teach discipline, psychology & real market strategy.
          </p>
        </div>
      </section>
    </main>
  );
}
