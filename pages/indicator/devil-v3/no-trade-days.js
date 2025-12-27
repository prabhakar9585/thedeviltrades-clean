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
    src: "/indicator/devil-v3/no-trade/4.png",
    alt: "No Trade Day 4",
  },
  {
    src: "/indicator/devil-v3/no-trade/5.png",
    alt: "No Trade Day 5",
  },
  {
    src: "/indicator/devil-v3/no-trade/6.png",
    alt: "No Trade Day 6",
  },
  {
    src: "/indicator/devil-v3/no-trade/7.png",
    alt: "No Trade Day 7",
  },
  {
    src: "/indicator/devil-v3/no-trade/8.png",
    alt: "No Trade Day 8",
  },
  {
    src: "/indicator/devil-v3/no-trade/9.png",
    alt: "No Trade Day 9",
  },
  {
    src: "/indicator/devil-v3/no-trade/10.png",
    alt: "No Trade Day 10",
  },
  {
    src: "/indicator/devil-v3/no-trade/11.png",
    alt: "No Trade Day 11",
  },
  {
    src: "/indicator/devil-v3/no-trade/12.png",
    alt: "No Trade Day 12",
  },
  {
    src: "/indicator/devil-v3/no-trade/13.png",
    alt: "No Trade Day 13",
  },
  {
    src: "/indicator/devil-v3/no-trade/14.png",
    alt: "No Trade Day 14",
  },
  {
    src: "/indicator/devil-v3/no-trade/15.png",
    alt: "No Trade Day 15",
  },
  {
    src: "/indicator/devil-v3/no-trade/15.png",
    alt: "No Trade Day 16",
  },
  {
    src: "/indicator/devil-v3/no-trade/15.png",
    alt: "No Trade Day 17",
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
