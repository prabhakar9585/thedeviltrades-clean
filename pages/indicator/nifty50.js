import Link from "next/link";

export default function Nifty50() {
  return (
    <main style={{ textAlign: "center", padding: 60 }}>
      <h1>NIFTY 50</h1>

      <div style={grid}>
        <Link href="/trades/profits"><div style={box}>✅ Profit Trades</div></Link>
        <Link href="/trades/losses"><div style={box}>❌ Loss Trades</div></Link>
        <Link href="/trades/notrades"><div style={box}>⏸ No Trade Days</div></Link>
      </div>
    </main>
  );
}

const grid = { display: "flex", gap: 20, justifyContent: "center" };
const box = {
  padding: 20,
  border: "2px solid #000",
  borderRadius: 10,
  cursor: "pointer",
  width: 180
};
