import Head from "next/head";

export default function DevilV3Purchase() {
  return (
    <>
      <Head>
        <title>THE DEVIL V3 | Purchase</title>
      </Head>

      <section className="purchase-page">
        <div className="purchase-overlay">
          <div className="purchase-card">
            <h1>THE DEVIL V3</h1>

            <label>Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>TradingView ID</label>
            <input type="text" placeholder="TradingView username" />

            <label>Mobile Number</label>
            <input type="tel" placeholder="Enter mobile number" />

            <p className="price">Price per Month: ₹5000 INR</p>

            <div className="terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the{" "}
                <a href="/terms" target="_blank">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button disabled>BUY NOW</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .purchase-page {
          min-height: calc(100vh - 160px);
          background: url("/purchase-bg.jpg") center center / cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .purchase-overlay {
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .purchase-card {
          width: 100%;
          max-width: 420px;
          background: rgba(0, 0, 0, 0.85);
          border: 1px solid #333;
          padding: 30px;
          color: #fff;
        }

        h1 {
          text-align: center;
          color: #ff3c00;
          margin-bottom: 25px;
        }

        label {
          font-size: 14px;
          margin-top: 12px;
          display: block;
        }

        input {
          width: 100%;
          padding: 10px;
          margin-top: 6px;
          background: #111;
          border: 1px solid #333;
          color: #fff;
        }

        .price {
          margin: 18px 0;
          color: #ff3c00;
          font-weight: bold;
          text-align: center;
        }

        .terms {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          margin-bottom: 20px;
        }

        .terms a {
          color: #ff3c00;
          text-decoration: underline;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #555;
          color: #999;
          border: none;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}
