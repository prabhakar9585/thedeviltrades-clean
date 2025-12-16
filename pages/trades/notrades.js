export default function NoTrades() {
  const images = ["/notrades/n1.png"];

  return (
    <main style={{ textAlign: "center", padding: 40 }}>
      <h1>No Trade Days</h1>

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
