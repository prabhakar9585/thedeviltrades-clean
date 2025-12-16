export default function ProfitTrades() {
  const images = Array.from({ length: 50 }, (_, i) => `/profits/p${i + 1}.png`);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Profit Trades</h1>

      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          style={{ width: "100%", maxWidth: "600px", marginBottom: "20px" }}
          onError={(e) => (e.target.style.display = "none")}
        />
      ))}
    </div>
  );
}
