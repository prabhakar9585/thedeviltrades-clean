import { useState } from "react";
import Head from "next/head";

export default function DevilV3() {
  const [name, setName] = useState("");
  const [tvId, setTvId] = useState("");
  const [mobile, setMobile] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!agree) return;

    setLoading(true);

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
      });

      const order = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Devil Trades",
        description: "THE DEVIL V3 - Monthly Subscription",
        order_id: order.id,
        prefill: {
          name: name,
          contact: mobile,
        },
        theme: {
          color: "#ff4d00",
        },
        handler: function (response) {
          alert("Payment Successful 🔥");
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      alert("Payment failed. Try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>THE DEVIL V3 | Purchase</title>
      </Head>

      <div className="purchase-page">
        <div className="purchase-card">
          <h1 className="title">THE DEVIL V3</h1>

          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <label>TradingView ID</label>
          <input
            type="text"
            value={tvId}
            onChange={(e) => setTvId(e.target.value)}
            placeholder="TradingView username"
          />

          <label>Mobile Number</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="10-digit mobile number"
          />

          <p className="price">Price per Month: ₹5000 INR</p>

          <div className="terms">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span>
              I agree to the{" "}
              <a href="/terms" target="_blank">
                Terms & Conditions
              </a>
            </span>
          </div>

          <button
            className={`buy-btn ${agree ? "active" : ""}`}
            disabled={!agree || loading}
            onClick={handlePayment}
          >
            {loading ? "PROCESSING..." : "BUY NOW"}
          </button>
        </div>
      </div>

      <style jsx>{`
        .purchase-page {
          min-height: calc(100vh - 120px);
          background: url("/devil-bg.jpg") center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .purchase-card {
          background: rgba(0, 0, 0, 0.75);
          padding: 40px;
          width: 380px;
          color: #fff;
          border: 1px solid #333;
        }

        .title {
          text-align: center;
          color: #ff4d00;
          margin-bottom: 25px;
        }

        label {
          display: block;
          margin-top: 14px;
          font-size: 14px;
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
          margin-top: 20px;
          color: #ff4d00;
          text-align: center;
          font-weight: bold;
        }

        .terms {
          margin-top: 16px;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .terms a {
          color: #ff4d00;
          text-decoration: underline;
        }

        .buy-btn {
          width: 100%;
          margin-top: 20px;
          padding: 12px;
          background: #444;
          color: #999;
          border: none;
          cursor: not-allowed;
        }

        .buy-btn.active {
          background: #ff4d00;
          color: #fff;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
