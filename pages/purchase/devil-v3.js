import { useState } from "react";
import Script from "next/script";

export default function DevilV3() {
  const [name, setName] = useState("");
  const [tvId, setTvId] = useState("");
  const [mobile, setMobile] = useState("");
  const [agree, setAgree] = useState(false);

  const handlePayment = async () => {
    const res = await fetch("/api/create-order", {
      method: "POST",
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Devil Trades",
      description: "THE DEVIL V3 Subscription",
      order_id: order.id,
      handler: function (response) {
        alert("Payment Successful!");
        console.log(response);
      },
      prefill: {
        name: name,
        contact: mobile,
      },
      theme: {
        color: "#ff4500",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className="purchase-wrap">
        <div className="purchase-card">
          <h1>THE DEVIL V3</h1>

          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />

          <label>TradingView ID</label>
          <input value={tvId} onChange={(e) => setTvId(e.target.value)} />

          <label>Mobile Number</label>
          <input value={mobile} onChange={(e) => setMobile(e.target.value)} />

          <p className="price">Price per Month: ₹5000 INR</p>

          <div className="terms">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span>
              I agree to the{" "}
              <a href="/terms" target="_blank">Terms & Conditions</a>
            </span>
          </div>

          <button
            disabled={!agree || !name || !tvId || !mobile}
            onClick={handlePayment}
          >
            BUY NOW
          </button>
        </div>
      </div>
    </>
  );
}
