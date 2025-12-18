import ImageSlider from "../../../components/ImageSlider";

export default function LossTrades() {
  const images = [
    "/indicator/devil-v3/loss/1.jpg",
    "/indicator/devil-v3/loss/2.jpg",
  ];

  return (
    <div className="indicator-page">
      <h1>NIFTY 50</h1>
      <ImageSlider images={images} />
    </div>
  );
}
