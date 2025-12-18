import ImageSlider from "../../../components/ImageSlider";

export default function ProfitTrades() {
  const images = [
    "/indicator/devil-v3/profit/1.jpg",
    "/indicator/devil-v3/profit/2.jpg",
    "/indicator/devil-v3/profit/3.jpg",
  ];

  return (
    <div className="indicator-page">
      <h1>NIFTY 50</h1>
      <ImageSlider images={images} />
    </div>
  );
}
