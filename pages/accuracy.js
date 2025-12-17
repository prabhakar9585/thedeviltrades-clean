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
      </section>

      <style jsx>{`
        .accuracy-page {
          background: #000;
          color: #fff;
          min-height: calc(100vh - 160px);
          padding: 60px 20px;
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
          box-shadow: 0 0 25px rgba(255, 77, 0, 0.25);
        }

        .accuracy-dates {
          font-size: 18px;
          margin-bottom: 30px;
          color: #ff4d00;
          letter-spacing: 0.5px;
        }

        .accuracy-note {
          font-size: 14px;
          color: #bbb;
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          .accuracy-dates {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
