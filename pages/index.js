import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devil Trades</title>
        <meta
          name="description"
          content="Devil Trades - Trading with Discipline"
        />
      </Head>

      <section className="home-hero">
        <div className="hero-overlay">
          <div className="hero-footer-text">
            <p>
              We don’t promise profits.
              <br />
              We teach discipline, psychology & real market strategy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
