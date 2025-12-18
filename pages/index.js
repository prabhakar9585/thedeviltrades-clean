import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devil Trades</title>
        <meta
          name="description"
          content="Devil Trades - Discipline, psychology & real market strategy"
        />
      </Head>

      {/* HOME HERO SECTION */}
      <section className="home-hero">
        {/* Bottom Center Text */}
        <div className="home-bottom-text">
          <p>We don’t promise profits.</p>
          <p>
            We teach discipline, psychology & real market strategy.
          </p>
        </div>
      </section>
    </>
  );
}
