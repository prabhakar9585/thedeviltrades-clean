export default function ProfitTrades() {
  const images = Array.from({ length: 50 }, (_, i) => `/profits/p${i + 1}.png`);

  return (
    <div className="gallery">
      <h1>Profit Trades</h1>
      {images.map((src, i) => (
        <img key={i} src={src} />
      ))}
    </div>
  );
}
