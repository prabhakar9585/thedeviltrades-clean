import Gallery from "../../components/Gallery";

export default function LossTrades() {
  return (
    <div className="page">
      <h1>NIFTY 50 – Loss Trades</h1>
      <Gallery folder="losses" prefix="l" />
    </div>
  );
}
