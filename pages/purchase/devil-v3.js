import { useEffect } from "react";

export default function DevilV3() {

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // test key
      amount: 500000, // ₹5000
      currency: "INR",
      name: "DEVIL TRADES",
      description: "THE DEVIL V3 - Monthly Subscription",
      handler: function (response) {
        alert("Payment Successful ✅\nPayment ID: " + response.razorpay_payment_id);
      },
      theme: {
        color: "#ff3c00",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="purchase-wrap">
      <div className="purchase-card">
        <h1>THE DEVIL V3</h1>

        <label>Name</label>
        <input type="text" placeholder="Your Name" />

        <label>TradingView ID</label>
        <input type="text" placeholder="TradingView Username" />

        <label>Mobile Number</label>
        <input type="tel" placeholder="Mobile Number" />

        <p className="price">Price per Month: ₹5000 INR</p>

        <div className="terms">
          <input type="checkbox" checked readOnly />
          <span>
            I agree to the <a href="/terms">Terms & Conditions</a>
          </span>
        </div>

        {/* BUY NOW ALWAYS ENABLED */}
        <button className="buy-btn" onClick={handlePayment}>
          BUY NOW
        </button>
      </div>
    </div>
  );
}
