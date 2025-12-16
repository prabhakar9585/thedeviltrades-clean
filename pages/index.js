import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devil Trades</title>
      </Head>

      <section className="home-hero">
        <div className="overlay">
          <p className="subtitle">
            We don’t promise profits.
            <br />
            We teach discipline, psychology & real market strategy.
          </p>
        </div>
      </section>
    </>
  );
}
