import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devil Trades</title>
      </Head>

      <section className="hero">
        <div className="hero-overlay">
          <h1>WELCOME BACK</h1>
          <p>
            We don’t promise profits.<br />
            We teach discipline, psychology & real market strategy.
          </p>
        </div>
      </section>
    </>
  );
}
