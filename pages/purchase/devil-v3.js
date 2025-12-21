import { useEffect, useState } from "react";

export default function DevilV3() {
  const [name, setName] = useState("");
  const [tvId, setTvId] = useState("");
  const [mobile, setMobile] = useState("");
  const [referral, setReferral] = useState("");
  const [agree, setAgree] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [showQR, setShowQR] = useState(false);

  // Enable BUY NOW only if required fields are filled
  useEffect(() => {
    if (name.trim() && tvId.trim() && mobile.length === 10 && agree) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [name, tvId, mobile, agree]);

  const handleBuyNow = () => {
    if (!enabled) return;
    setShowQR(true);
  };

  const handleWhatsAppConfirm = () => {
    const message = `
Hello Devil Trades 👋

I have completed the payment for *THE DEVIL V.3*.

Name: ${name}
TradingView ID: ${tvId}
Mobile: ${mobile}
Referral: ${referral || "N/A"}

Please find the payment screenshot attached.
`;

    const whatsappUrl = `https://wa.me/919585678469?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
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
          disabled={!enabled}
          onClick={handleBuyNow}
        >
          BUY NOW
        </button>
      </div>

      {/* ================== QR MODAL ================== */}
      {showQR && (
        <div className="qr-overlay">
          <div className="qr-box">
            <h2>Pay via UPI</h2>

            <img
              src="/upi-qr.png"
              alt="UPI QR Code"
              style={{ width: "260px", margin: "20px 0" }}
            />

            <p>
              Amount: <b>₹5000</b>
            </p>
            <p>
              After payment, click the button below and send screenshot on
              WhatsApp.
            </p>

            <button className="buy-btn active" onClick={handleWhatsAppConfirm}>
              I HAVE PAID – CONFIRM ON WHATSAPP
            </button>

            <button
              style={{ marginTop: "10px", background: "transparent", color: "#aaa" }}
              onClick={() => setShowQR(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
