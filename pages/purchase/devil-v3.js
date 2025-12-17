import { useState } from "react";

export default function DevilV3() {
  const [name, setName] = useState("");
  const [tvId, setTvId] = useState("");
  const [mobile, setMobile] = useState("");
  const [agree, setAgree] = useState(false);
  const price = 5000;

  const isFormValid =
    name.trim() !== "" &&
    tvId.trim() !== "" &&
    mobile.trim().length === 10 &&
    agree;

  const handlePayment = async () => {
    if (!isFormValid) return;

    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: price }),
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Devil Trades",
      description: "THE DEVIL V3 - Monthly Subscription",
      order_id: order.id,
      handler: function (response) {
        alert("Payment Successful!");
        console.log(response);
      },
      prefill: {
        name,
        contact: mobile,
      },
      theme: { color: "#ff3c00" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="purchase-wrapper">
      <div className="purchase-box">
        <h1>THE DEVIL V3</h1>

        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <label>TradingView ID</label>
        <input value={tvId} onChange={(e) => setTvId(e.target.value)} />

        <label>Mobile Number</label>
        <input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          maxLength={10}
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
          className={`buy-btn ${isFormValid ? "active" : ""}`}
          disabled={!isFormValid}
          onClick={handlePayment}
        >
          BUY NOW
        </button>
      </div>

      <style jsx>{`
        .purchase-wrapper {
          min-height: calc(100vh - 140px);
          display: flex;
          justify-content: center;
          align-items: center;
          background: url("/purchase-bg.jpg") center/cover no-repeat;
        }
        .purchase-box {
          background: rgba(0, 0, 0, 0.75);
          padding: 40px;
          width: 420px;
          color: #fff;
          border: 1px solid #333;
        }
        h1 {
          text-align: center;
          color: #ff3c00;
        }
        label {
          display: block;
          margin-top: 14px;
        }
        input {
          width: 100%;
          padding: 10px;
          background: #111;
          color: #fff;
          border: 1px solid #333;
        }
        .price {
          color: #ff3c00;
          margin: 20px 0;
          text-align: center;
        }
        .terms {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .terms a {
          color: #ff3c00;
        }
        .buy-btn {
          margin-top: 20px;
          width: 100%;
          padding: 14px;
          background: #444;
          border: none;
          color: #000;
          font-weight: bold;
          cursor: not-allowed;
        }
        .buy-btn.active {
          background: #ff3c00;
          color: #000;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
