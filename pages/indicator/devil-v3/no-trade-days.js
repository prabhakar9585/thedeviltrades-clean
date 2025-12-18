import ImageSlider from "../../../components/ImageSlider";

export default function NoTradeDays() {
  const images = [
    "/indicator/devil-v3/no-trade/1.jpg",
    "/indicator/devil-v3/no-trade/2.jpg",
  ];

  return (
    <div className="indicator-page">
      <h1>NIFTY 50</h1>
      <ImageSlider images={images} />
    </div>
  );
}
