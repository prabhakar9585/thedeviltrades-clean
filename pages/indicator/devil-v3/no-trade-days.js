export default function NoTradeDays() {
  // 🔥 CHANGE THIS NUMBER ONLY WHEN YOU ADD MORE IMAGES
  const TOTAL_IMAGES = 20; // update when you add more no-trade images

  const images = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
    src: `/indicator/devil-v3/no-trade/${i + 1}.png`,
    alt: `No Trade Day ${i + 1}`,
  }));

  return (
    <div
      className="indicator-page"
      style={{
        backgroundImage:
          "url('/indicator/devil-v3/bg/no-trade-bg.jpg')",
      }}
    >
      <h1 className="indicator-title">
        NIFTY 50 – NO TRADE DAYS
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
