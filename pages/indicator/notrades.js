export default function NoTradeDays() {
  const images = Array.from({ length: 50 }, (_, i) => `/notrades/n${i + 1}.png`);

  return (
    <div className="gallery">
      <h1>No Trade Days</h1>
      {images.map((src, i) => (
        <img key={i} src={src} />
      ))}
    </div>
  );
}
