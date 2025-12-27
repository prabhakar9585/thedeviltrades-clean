export default function LossTrades() {
  // 🔥 CHANGE THIS NUMBER WHEN YOU ADD MORE IMAGES
  const TOTAL_IMAGES = 62;

  const images = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
    src: `/indicator/devil-v3/loss/${i + 1}.png`,
    alt: `Loss Trade ${i + 1}`,
  }));

  return (
    <div
      className="indicator-page"
      style={{
        backgroundImage:
          "url('/indicator/devil-v3/bg/loss-bg.jpg')",
      }}
    >
      <h1 className="indicator-title">
        NIFTY 50 – LOSS TRADES
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
