export default function NoTrades() {
  return (
    <>
      <Header />
      <h1 style={{ padding: "30px" }}>No Trade Days</h1>

      {[...Array(20)].map((_, i) => (
        <img
          key={i}
          src={`/notrades/n${i + 1}.png`}
          style={{ width: "90%", margin: "20px auto", display: "block" }}
        />
      ))}
    </>
  );
}
