const lossImages = [
  "/indicator/devil-v3/loss/1.png",
  "/indicator/devil-v3/loss/2.png",
  "/indicator/devil-v3/loss/3.png",
  "/indicator/devil-v3/loss/4.png",
  "/indicator/devil-v3/loss/5.png",
];

export default function LossTrades() {
  return (
    <div className="indicator-page">
      <h1>NIFTY 50 – LOSS TRADES</h1>

      <div className="image-column">
        {lossImages.map((img, index) => (
          <div key={index} className="image-box">
            <img src={img} alt={`Loss Trade ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
