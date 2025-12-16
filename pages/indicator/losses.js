import Header from "../../components/Header";

export default function Losses() {
  return (
    <>
      <Header />
      <h1 style={{ padding: "30px" }}>Loss Trades</h1>

      {[...Array(20)].map((_, i) => (
        <img
          key={i}
          src={`/losses/l${i + 1}.png`}
          style={{ width: "90%", margin: "20px auto", display: "block" }}
        />
      ))}
    </>
  );
}
