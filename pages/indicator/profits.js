import Header from "../../components/Header";

export default function Profits() {
  return (
    <>
      <Header />
      <h1 style={{ padding: "30px" }}>Profit Trades</h1>

      {[...Array(20)].map((_, i) => (
        <img
          key={i}
          src={`/profits/p${i + 1}.png`}
          style={{ width: "90%", margin: "20px auto", display: "block" }}
        />
      ))}
    </>
  );
}
