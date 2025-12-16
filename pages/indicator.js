import { useState } from "react";

export default function Indicator() {
  const [market, setMarket] = useState(null); // nifty
  const [category, setCategory] = useState(null); // profit/loss/notrade

  const profitImages = [
    "/profits/p1.png",
    "/profits/p2.png",
  ];

  const lossImages = [
    "/losses/l1.png",
    "/losses/l2.png",
  ];

  const noTradeImages = [
    "/notrades/n1.png",
    "/notrades/n2.png",
  ];

  const renderImages = (images) => (
    <div className="image-grid">
      {images.map((img, i) => (
        <img key={i} src={img} alt="trade screenshot" />
      ))}
    </div>
  );

  return (
    <section className="indicator-page">
      <h1>Indicator Performance</h1>
      <p className="subtitle">
        Complete transparency of our indicator performance.
      </p>

      {/* STEP 1: MARKET SELECTION */}
      {!market && (
        <div className="selector">
          <button onClick={() => setMarket("nifty")}>
            NIFTY 50
          </button>
        </div>
      )}

      {/* STEP 2: CATEGORY SELECTION */}
      {market === "nifty" && !category && (
        <>
          <h2 className="section-title">NIFTY 50 Trades</h2>

          <div className="selector">
            <button onClick={() => setCategory("profit")}>
              Profit Trades
            </button>

            <button onClick={() => setCategory("loss")}>
              Loss Trades
            </button>

            <button onClick={() => setCategory("notrade")}>
              No Trade Days
            </button>
          </div>

          <button className="back-btn" onClick={() => setMarket(null)}>
            ← Back
          </button>
        </>
      )}

      {/* STEP 3: SHOW IMAGES */}
      {category && (
        <>
          <h2 className="section-title">
            {category === "profit" && "Profit Trades"}
            {category === "loss" && "Loss Trades"}
            {category === "notrade" && "No Trade Days"}
          </h2>

          {category === "profit" && renderImages(profitImages)}
          {category === "loss" && renderImages(lossImages)}
          {category === "notrade" && renderImages(noTradeImages)}

          <button className="back-btn" onClick={() => setCategory(null)}>
            ← Back to Categories
          </button>
        </>
      )}

      <p className="disclaimer">
        ⚠ Educational purpose only. Trading involves risk.
      </p>
    </section>
  );
}
