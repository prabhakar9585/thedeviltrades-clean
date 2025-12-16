export default function LossTrades() {
  // Auto-load images: l1.png, l2.png, l3.png ...
  const images = Array.from({ length: 50 }, (_, i) => `/losses/l${i + 1}.png`);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Loss Trades</h1>
      <p>Transparent record of loss trades for learning & discipline.</p>

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Loss trade ${index + 1}`}
          style={{
            width: "100%",
            maxWidth: "650px",
            display: "block",
            marginBottom: "20px",
            border: "1px solid #ccc",
          }}
          onError={(e) => (e.target.style.display = "none")}
        />
      ))}
    </div>
  );
}
