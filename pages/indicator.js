import Link from "next/link";

export default function Indicator() {
  return (
    <main style={{ textAlign: "center", padding: 60 }}>
      <h1>Indicators</h1>

      <Link href="/indicator/nifty50">
        <div style={card}>NIFTY 50</div>
      </Link>
    </main>
  );
}

const card = {
  margin: "40px auto",
  width: "220px",
  padding: "20px",
  border: "2px solid #000",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold"
};
