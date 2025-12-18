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
];

export default function ProfitTrades() {
  return (
    <div className="indicator-page">
      <h1>NIFTY 50 – PROFIT TRADES</h1>

      <div className="image-column">
        {profitImages.map((img, index) => (
          <div key={index} className="image-box">
            <img src={img} alt={`Profit Trade ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
