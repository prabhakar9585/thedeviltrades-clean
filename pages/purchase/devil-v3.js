import { useState } from "react";
import Head from "next/head";

export default function DevilV3() {
  const [name, setName] = useState("");
  const [tvId, setTvId] = useState("");
  const [mobile, setMobile] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFormValid =
    name.trim() !== "" &&
    tvId.trim() !== "" &&
    mobile.trim().length === 10 &&
    agree;

  const handlePayment = async () => {
    if (!isFormValid) return;

    setLoading(true);

    const res = await fetch("/api/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 5000 }),
    });

    const data = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: "INR",
      name: "Devil Trades",
      description: "THE DEVIL V3 - Monthly Subscription",
      order_id: data.id,
      handler: function (response) {
        alert("Payment Successful ✅");
      },
      prefill: {
        name,
        contact: mobile,
      },
      theme: {
        color: "#ff3c00",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>THE DEVIL V3 | Purchase</title>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Head>

      <section className="purchase-bg">
        <div className="purchase-card">
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
            disabled={!isFormValid || loading}
            onClick={handlePayment}
          >
            {loading ? "Processing..." : "BUY NOW"}
          </button>
        </div>
      </section>
    </>
  );
}
