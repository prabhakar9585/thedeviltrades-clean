const noTradeImages = [
  "/indicator/devil-v3/no-trade/1.png",
];

export default function NoTradeDays() {
  return (
    <div className="indicator-page">
      <h1>NIFTY 50 – NO TRADE DAYS</h1>

      <div className="image-column">
        {noTradeImages.map((img, index) => (
          <div key={index} className="image-box">
            <img src={img} alt={`No Trade Day ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
