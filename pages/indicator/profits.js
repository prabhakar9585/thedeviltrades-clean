import Gallery from "../../components/Gallery";

export default function ProfitTrades() {
  return (
    <div className="page">
      <h1>NIFTY 50 – Profit Trades</h1>
      <Gallery folder="profits" prefix="p" />
    </div>
  );
}
