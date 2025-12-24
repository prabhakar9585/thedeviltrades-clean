const profitImages = [
  "/indicator/devil-v3/profit/1.png",
  "/indicator/devil-v3/profit/2.png",
  "/indicator/devil-v3/profit/3.png",
  "/indicator/devil-v3/profit/4.png",
  "/indicator/devil-v3/profit/5.png",
  "/indicator/devil-v3/profit/6.png",
  "/indicator/devil-v3/profit/7.png",
  "/indicator/devil-v3/profit/8.png",
  "/indicator/devil-v3/profit/9.png",
  "/indicator/devil-v3/profit/10.png",
  "/indicator/devil-v3/profit/11.png",
  "/indicator/devil-v3/profit/12.png",
  "/indicator/devil-v3/profit/13.png",
  "/indicator/devil-v3/profit/14.png",
  "/indicator/devil-v3/profit/15.png",
  "/indicator/devil-v3/profit/16.png",
  "/indicator/devil-v3/profit/17.png",
  "/indicator/devil-v3/profit/18.png",
  "/indicator/devil-v3/profit/19.png",
  "/indicator/devil-v3/profit/20.png",
  "/indicator/devil-v3/profit/21.png",
  "/indicator/devil-v3/profit/22.png",
  "/indicator/devil-v3/profit/23.png",
  "/indicator/devil-v3/profit/24.png",
  "/indicator/devil-v3/profit/25.png",
  "/indicator/devil-v3/profit/26.png",
  "/indicator/devil-v3/profit/27.png",
  "/indicator/devil-v3/profit/28.png",
  "/indicator/devil-v3/profit/29.png",
  "/indicator/devil-v3/profit/30.png",
  "/indicator/devil-v3/profit/31.png",
  "/indicator/devil-v3/profit/32.png",
  "/indicator/devil-v3/profit/33.png",
  "/indicator/devil-v3/profit/34.png",
  "/indicator/devil-v3/profit/35.png",
  "/indicator/devil-v3/profit/36.png",
  "/indicator/devil-v3/profit/37.png",
  "/indicator/devil-v3/profit/38.png",
  "/indicator/devil-v3/profit/39.png",
];

export default function ProfitTrades() {
  // AUTO LOAD: Add more PNGs anytime (1.png, 2.png, 3.png...)
  const images = Array.from({ length: 9 }, (_, i) => ({
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
