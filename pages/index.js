import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <section className="hero">
        <div>
          <h1>DEVIL TRADES</h1>
          <p>
            We don’t promise profits. <br />
            We teach discipline, psychology & real market strategy.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>
          ⚠ Trading involves risk. Past performance does not guarantee future
          results. Educational purpose only.
        </p>
      </footer>
    </>
  );
}
