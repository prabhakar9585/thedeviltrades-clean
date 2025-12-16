export default function Gallery({ folder, prefix }) {
  const images = Array.from({ length: 100 }, (_, i) =>
    `/${folder}/${prefix}${i + 1}.png`
  );

  return (
    <div className="gallery">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          onError={(e) => (e.target.style.display = "none")}
          alt=""
        />
      ))}
    </div>
  );
}
