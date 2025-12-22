import { useEffect, useState } from "react";

export default function DevilV3() {
  const [name, setName] = useState("");
  const [tvId, setTvId] = useState("");
  const [mobile, setMobile] = useState("");
  const [referral, setReferral] = useState("");
  const [agree, setAgree] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [showQR, setShowQR] = useState(false);

  // ✅ Enable BUY NOW only when required fields are filled
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

  // ✅ Open QR popup
  const handleBuyNow = () => {
    if (!enabled) return;
    setShowQR(true);
  };

  // ✅ WhatsApp confirmation
  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello Devil Trades 👋\n\nI have completed UPI payment for THE DEVIL V.3.\n\nName: ${name}\nTradingView ID: ${tvId}\nMobile: ${mobile}\nReferral: ${
        referral || "N/A"
      }\n\nPlease verify my payment.`
    );

    window.open(
      `https://wa.me/919585678469?text=${msg}`,
      "_blank"
    );
  };

  return (
    <div className="purchase-wrap">
      {/* PURCHASE FORM */}
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
          disabled={!enabled}
          onClick={handleBuyNow}
        >
          BUY NOW
        </button>
      </div>

      {/* 🔥 UPI QR OVERLAY */}
      {showQR && (
        <div className="qr-overlay">
          <div className="qr-box">
            <h2>Pay via UPI</h2>

            <img
              src="/upi-qr.png"
              alt="UPI QR"
              style={{
                width: "220px",
                margin: "20px auto",
                display: "block",
              }}
            />

            <p>Scan & complete ₹5000 payment</p>

            <button
              className="buy-btn active"
              style={{ marginTop: "16px" }}
              onClick={openWhatsApp}
            >
              I HAVE PAID – CONFIRM ON WHATSAPP
            </button>

            <p
              style={{
                marginTop: "12px",
                cursor: "pointer",
                color: "#aaa",
              }}
              onClick={() => setShowQR(false)}
            >
              Cancel
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
