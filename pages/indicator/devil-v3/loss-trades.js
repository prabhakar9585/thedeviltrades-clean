const lossImages = [
  "/indicator/devil-v3/loss/1.png",
  "/indicator/devil-v3/loss/2.png",
  "/indicator/devil-v3/loss/3.png",
  "/indicator/devil-v3/loss/4.png",
  "/indicator/devil-v3/loss/5.png",
  "/indicator/devil-v3/loss/6.png",
  "/indicator/devil-v3/loss/7.png",
  "/indicator/devil-v3/loss/8.png",
  "/indicator/devil-v3/loss/9.png",
  "/indicator/devil-v3/loss/10.png",
  "/indicator/devil-v3/loss/11.png",
  "/indicator/devil-v3/loss/12.png",
  "/indicator/devil-v3/loss/13.png",
  "/indicator/devil-v3/loss/14.png",
  "/indicator/devil-v3/loss/15.png",
  "/indicator/devil-v3/loss/16.png",

];

export default function LossTrades() {
  const images = Array.from({ length: 5 }, (_, i) => ({
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
