export default function LossTrades() {
  const images = Array.from({ length: 50 }, (_, i) => `/losses/l${i + 1}.png`);

  return (
    <div className="gallery">
      <h1>Loss Trades</h1>
      {images.map((src, i) => (
        <img key={i} src={src} />
      ))}
    </div>
  );
}
