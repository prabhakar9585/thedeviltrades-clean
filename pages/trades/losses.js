export default function Losses() {
  const images = ["/losses/l1.png", "/losses/l2.png"];

  return (
    <main style={{ textAlign: "center", padding: 40 }}>
      <h1>Loss Trades</h1>

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
  display: "block"
};
