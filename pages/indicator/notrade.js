import Gallery from "../../components/Gallery";

export default function NoTradeDays() {
  return (
    <div className="page">
      <h1>NIFTY 50 – No Trade Days</h1>
      <Gallery folder="notrades" prefix="n" />
    </div>
  );
}
