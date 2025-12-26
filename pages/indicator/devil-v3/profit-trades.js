export default function ProfitTrades() {
  // 🔥 CHANGE THIS NUMBER WHEN YOU ADD MORE IMAGES
  const TOTAL_IMAGES = 97;

  const images = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
    src: `/indicator/devil-v3/profit/${i + 1}.png`,
    alt: `Profit Trade ${i + 1}`,
  }));

  return (
    <div
      className="indicator-page"
      style={{
        backgroundImage:
          "url('/indicator/devil-v3/bg/profit-bg.jpg')",
      }}
    >
      <h1 className="indicator-title">
        NIFTY 50 – PROFIT TRADES
      </h1>

      <div className="image-column">
        {images.map((img, index) => (
          <div className="image-box" key={index}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
