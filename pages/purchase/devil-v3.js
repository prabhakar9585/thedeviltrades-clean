import { useState } from "react";
import Head from "next/head";

export default function DevilV3() {
  const [name, setName] = useState("");
  const [tvId, setTvId] = useState("");
  const [mobile, setMobile] = useState("");
  const [agree, setAgree] = useState(false);

  const isValid =
    name.trim() !== "" &&
    tvId.trim() !== "" &&
    mobile.trim() !== "" &&
    agree;

  return (
    <>
      <Head>
        <title>THE DEVIL V3 | Purchase</title>
      </Head>

      <section className="form-page">
        <div className="form-box">
          <h1>THE DEVIL V3</h1>

          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />

          <label>TradingView ID</label>
          <input value={tvId} onChange={(e) => setTvId(e.target.value)} />

          <label>Mobile Number</label>
          <input value={mobile} onChange={(e) => setMobile(e.target.value)} />

          <div className="price">
            Price per Month: <strong>₹5000 INR</strong>
          </div>

          <div className="terms">
  <input
    type="checkbox"
    checked={agree}
    onChange={() => setAgree(!agree)}
  />

  <span>
    I agree to the{" "}
    <a href="/terms" target="_blank">
      Terms & Conditions
    </a>
  </span>
</div>

          <button disabled={!isValid}>BUY NOW</button>
        </div>
      </section>

      <style jsx>{`
        .form-page {
          min-height: calc(100vh - 160px);
          background: #000;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .form-box {
          width: 400px;
          border: 1px solid #333;
          padding: 30px;
          color: #fff;
        }

        h1 {
          text-align: center;
          color: #ff3c00;
          margin-bottom: 20px;
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
          margin: 20px 0;
          color: #ff3c00;
        }

        .terms {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          margin-bottom: 20px;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #ff3c00;
          border: none;
          font-weight: bold;
          cursor: pointer;
        }

        button:disabled {
          background: #555;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}
