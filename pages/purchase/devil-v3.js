import { useState } from "react";

export default function DevilV3() {
  const [form, setForm] = useState({
    name: "",
    tradingview: "",
    mobile: "",
    agree: false,
  });

  const isValid =
    form.name &&
    form.tradingview &&
    form.mobile.length === 10 &&
    form.agree;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const startPayment = async () => {
    const res = await fetch("/api/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        tradingview: form.tradingview,
        mobile: form.mobile,
        amount: 5000,
      }),
    });

    const data = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: "INR",
      name: "DEVIL TRADES",
      description: "THE DEVIL V3 Subscription",
      order_id: data.id,
      handler: function (response) {
        alert("Payment Successful ✅");
        console.log(response);
      },
      prefill: {
        name: form.name,
        contact: form.mobile,
      },
      theme: {
        color: "#ff4d00",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section className="purchase-bg">
      <div className="purchase-card">
        <h1>THE DEVIL V3</h1>

        <label>Name</label>
        <input name="name" onChange={handleChange} />

        <label>TradingView ID</label>
        <input name="tradingview" onChange={handleChange} />

        <label>Mobile Number</label>
        <input name="mobile" maxLength="10" onChange={handleChange} />

        <p className="price">Price per Month: ₹5000 INR</p>

        <div className="terms">
          <input
            type="checkbox"
            name="agree"
            onChange={handleChange}
          />
          <span>
            I agree to the{" "}
            <a href="/terms" target="_blank">Terms & Conditions</a>
          </span>
        </div>

        <button
          disabled={!isValid}
          onClick={startPayment}
          className={isValid ? "buy active" : "buy"}
        >
          BUY NOW
        </button>
      </div>
    </section>
  );
}
