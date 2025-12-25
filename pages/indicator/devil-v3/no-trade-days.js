export default function NoTradeDays() {
  const images = [
  {
    src: "/indicator/devil-v3/no-trade/1.png",
    alt: "No Trade Day 1",
  },
  {
    src: "/indicator/devil-v3/no-trade/2.png",
    alt: "No Trade Day 2",
  },
  {
    src: "/indicator/devil-v3/no-trade/3.png",
    alt: "No Trade Day 3",
  },
  {
    src: "/indicator/devil-v3/no-trade/3.png",
    alt: "No Trade Day 3",
  },

];

  return (
    <div
      className="indicator-page"
      style={{
        backgroundImage: "url('/indicator/devil-v3/bg/no-trade-bg.jpg')",
      }}
    >
      <h1 className="indicator-title">
        NIFTY 50 – NO TRADE DAYS
      </h1>

      <div className="image-column">
        {images.map((img, index) => (
          <div className="image-box" key={index}>
            <img
              src={img.src}
              alt={img.alt}
              style={{
                maxWidth: "90%",
                height: "auto",
                display: "block",
                margin: "0 auto",
                zIndex: 5,
                position: "relative",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
