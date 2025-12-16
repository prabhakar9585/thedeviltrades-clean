import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devil Trades</title>
        <meta name="description" content="Devil Trades - Trading with Discipline" />
      </Head>

      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="overlay">
          <h1 className="title">WELCOME BACK</h1>
          <p className="subtitle">
            We don’t promise profits.
            <br />
            We teach discipline, psychology & real market strategy.
          </p>
        </div>
      </section>

      <style jsx>{`
        .home-hero {
          min-height: calc(100vh - 120px);
          width: 100%;
          background-image: url("/devil-bg.jpg"); /* 🔥 YOUR DEVIL WALLPAPER */
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          background: rgba(0, 0, 0, 0.65);
          padding: 80px 20px;
          text-align: center;
          width: 100%;
        }

        .title {
          color: #ff4500;
          font-size: 52px;
          letter-spacing: 3px;
          margin-bottom: 20px;
        }

        .subtitle {
          color: #ffffff;
          font-size: 18px;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 36px;
