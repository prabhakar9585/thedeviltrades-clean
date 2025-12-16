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
          {/* NO WELCOME BACK TEXT (REMOVED AS YOU ASKED) */}
        </div>
      </section>

      <style jsx>{`
        .home-hero {
          min-height: calc(100vh - 160px);
          width: 100%;
          background-image: url("/devil-wallpaper.jpg"); /* 🔴 CHANGE NAME IF NEEDED */
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
        }

        .hero-overlay {
          min-height: calc(100vh - 160px);
          background: rgba(0, 0, 0, 0.45);
        }
      `}</style>
    </>
  );
}
