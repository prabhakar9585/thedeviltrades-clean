export default function Profits() {
  const images = [
    "/profits/p1.png",
    "/profits/p2.png",
    "/profits/p3.png"
  ];

  return (
    <main style={{ textAlign: "center", padding: 40 }}>
      <h1>Profit Trades</h1>

      {images.map((img, i) => (
        <img key={i} src={img} style={imgStyle} />
      ))}
    </main>
  );
}

const imgStyle = {
  width: "80%",
  maxWidth: "600px",
  margin: "20px auto",
  display: "block",
  border: "1px solid #ccc"
};
