import Head from "next/head";

export default function Accuracy() {
  return (
    <>
      <Head>
        <title>Accuracy | Devil Trades</title>
        <meta
          name="description"
          content="Verified trading accuracy and real performance screenshots"
        />
      </Head>

      <section className="accuracy-page">
        {/* CONTENT WRAPPER */}
        <div className="accuracy-content">
          {/* IMAGE SECTION */}
          <div className="accuracy-image-wrap">
            <img
              src="/accuracy-report.png"
              alt="Devil Trades Strategy Performance"
            />
          </div>

          {/* DATE RANGE */}
          <div className="accuracy-dates">
            <p>
              <strong>Performance Data:</strong>
              <br />
              28/04/2025 – 14/12/2025
            </p>
          </div>

          {/* FOOTER NOTE */}
          <div className="accuracy-note">
            <p>
              Note: Performance data is updated every month on the last trading
              day.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* PAGE WITH BACKGROUND */
        .accuracy-page {
          min-height: calc(100vh - 160px);
          padding: 80px 20px;
          background-image: url("/accuracy-bg.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          color: #fff;
        }

        /* DARK OVERLAY */
        .accuracy-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          z-index: 0;
        }

        /* CONTENT ABOVE OVERLAY */
        .accuracy-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .accuracy-image-wrap {
          max-width: 1200px;
          margin: 0 auto 40px auto;
        }

        .accuracy-image-wrap img {
          width: 100%;
          height: auto;
          border-radius: 6px;
          box-shadow: 0 0 25px rgba(255, 77, 0, 0.35);
        }

        .accuracy-dates {
          font-size: 18px;
          margin-bottom: 30px;
          color: #ff4d00;
          letter-spacing: 0.5px;
        }

        .accuracy-note {
          font-size: 14px;
          color: #ccc;
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          .accuracy-page {
            padding: 60px 15px;
          }

          .accuracy-dates {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
