import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devil Trades</title>
        <meta
          name="description"
          content="Devil Trades - Trading with discipline, psychology & real market strategy"
        />
      </Head>

      {/* HOME HERO */}
      <section className="home-hero">
        <div className="overlay">
          <div className="bottom-text">
            <p>
              We don’t promise profits.
              <br />
              We teach discipline, psychology & real market strategy.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-hero {
          min-height: calc(100vh - 160px); /* header height handled */
          width: 100%;
          margin-top: 160px; /* 🔥 THIS IS THE KEY FIX */
          background-image: url("/devil-bg.jpg");
          background-size: cover;
          background-position: top center; /* 🔥 SHOW IMAGE HEADER TEXT */
          background-repeat: no-repeat;
          position: relative;
        }

        .overlay {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.55)
          );
          position: relative;
        }

        .bottom-text {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          max-width: 720px;
          padding: 0 20px;
        }

        .bottom-text p {
          color: #ffffff;
          font-size: 18px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .home-hero {
            margin-top: 140px;
          }

          .bottom-text {
            bottom: 40px;
          }

          .bottom-text p {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
