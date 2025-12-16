import { useState } from "react";

const images = {
  profits: Array.from({ length: 50 }, (_, i) => `/profits/p${i + 1}.png`),
  losses: Array.from({ length: 50 }, (_, i) => `/losses/l${i + 1}.png`),
  notrades: Array.from({ length: 50 }, (_, i) => `/notrades/n${i + 1}.png`)
};

export default function Indicator() {
  const [active, setActive] = useState("profits");

  return (
    <div className="indicator-page">
      <h1>NIFTY 50 – Indicator</h1>

      <div className="indicator-tabs">
        <button onClick={() => setActive("profits")}>Profit Trades</button>
        <button onClick={() => setActive("losses")}>Loss Trades</button>
        <button onClick={() => setActive("notrades")}>No Trade Days</button>
      </div>

      <div className="gallery">
        {images[active].map((src, index) => (
          <img
            key={index}
            src={src}
            onError={(e) => (e.target.style.display = "none")}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
