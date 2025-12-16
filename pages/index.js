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

      {/* HOME HERO SECTION */}
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
          min-height: calc(100vh - 160px); /* header + footer safe */
          width: 100%;
          background-image: url("/devil-bg.jpg"); /* YOUR FULL IMAGE */
          background-size: cover;
          background-position: center center; /* IMPORTANT FIX */
          background-repeat: no-repeat;
          position: relative;
        }

        .overlay {
          width: 100%;
          height: 100%;
          position: relative;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.55)
          );
        }

        /* Bottom Center Text */
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
