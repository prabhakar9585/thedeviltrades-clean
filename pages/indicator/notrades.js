export default function NoTradeDays() {
  // Auto-load images: n1.png, n2.png, n3.png ...
  const images = Array.from({ length: 50 }, (_, i) => `/notrades/n${i + 1}.png`);

  return (
    <div style={{ padding: "40px" }}>
      <h1>No Trade Days</h1>
      <p>Days where discipline was followed and no trades were taken.</p>

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`No trade day ${index + 1}`}
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
