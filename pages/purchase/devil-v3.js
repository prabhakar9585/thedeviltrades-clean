import { useEffect, useState } from "react";

export default function DevilV3() {
  const [name, setName] = useState("");
  const [tvId, setTvId] = useState("");
  const [mobile, setMobile] = useState("");
  const [referral, setReferral] = useState("");
  const [agree, setAgree] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // Enable Buy Now only if REQUIRED fields filled
  useEffect(() => {
    if (
      name.trim() &&
      tvId.trim() &&
      mobile.length === 10 &&
      agree
    ) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [name, tvId, mobile, agree]);

  const handleBuyNow = async () => {
    if (!enabled) return;

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
      description: "THE DEVIL V.3",
      order_id: data.id,
      handler: function (response) {
        alert("Payment Successful!");
        console.log({
          response,
          name,
          tvId,
          mobile,
          referral,
        });
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
    <div className="purchase-wrap">
      <div className="purchase-card">
        <h1>THE DEVIL V.3</h1>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="TradingView ID"
          value={tvId}
          onChange={(e) => setTvId(e.target.value)}
        />

        <input
          placeholder="Mobile Number"
          value={mobile}
          maxLength="10"
          onChange={(e) => setMobile(e.target.value)}
        />

        <input
          placeholder="Referral Code (Optional)"
          value={referral}
          onChange={(e) => setReferral(e.target.value)}
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
          className={`buy-btn ${enabled ? "active" : ""}`}
          disabled={!enabled}
          onClick={handleBuyNow}
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
}
