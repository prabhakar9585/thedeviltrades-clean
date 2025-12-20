import { useEffect, useState } from "react";

export default function DevilV3() {
  const [name, setName] = useState("");
  const [tvId, setTvId] = useState("");
  const [mobile, setMobile] = useState("");
  const [referral, setReferral] = useState("");
  const [agree, setAgree] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Enable BUY NOW only if required fields are filled
  useEffect(() => {
    if (name.trim() && tvId.trim() && mobile.length === 10 && agree) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [name, tvId, mobile, agree]);

  const handleBuyNow = async () => {
    if (!enabled || loading) return;

    setLoading(true);

    try {
      // 🔹 STEP 1: Create Razorpay Order
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("Failed to create Razorpay order");
      }

      const order = await res.json();

      if (!order || !order.id) {
        throw new Error("Invalid order response from server");
      }

      // 🔹 STEP 2: Check Razorpay SDK
      if (typeof window === "undefined" || !window.Razorpay) {
        throw new Error("Razorpay SDK not loaded");
      }

      // 🔹 STEP 3: Razorpay Options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Devil Trades",
        description: "THE DEVIL V.3 Subscription",
        order_id: order.id,

        handler: async function (response) {
          try {
            // 🔹 Optional: Save payment info
            await fetch("/api/payment-success", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name,
                tvId,
                mobile,
                referral,
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
              }),
            });

            // 🔹 Redirect to success page
            window.location.href =
              `/purchase/success?pid=${response.razorpay_payment_id}`;
          } catch (err) {
            console.error("Payment saved failed:", err);
            alert(
              "Payment successful, but saving data failed. Please contact support."
            );
          }
        },

        prefill: {
          name: name,
          contact: mobile,
        },

        theme: {
          color: "#ff4d00",
        },
      };

      // 🔹 STEP 4: Open Razorpay Checkout
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment Error:", err);
      alert("Payment system error. Please refresh and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="purchase-page">
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
          maxLength="10"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value.replace(/\D/g, ""))
          }
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
            <a href="/terms" target="_blank" rel="noreferrer">
              Terms & Conditions
            </a>
          </span>
        </div>

        <button
          className={`buy-btn ${enabled ? "active" : ""}`}
          disabled={!enabled || loading}
          onClick={handleBuyNow}
        >
          {loading ? "PROCESSING..." : "BUY NOW"}
        </button>
      </div>
    </div>
  );
}
