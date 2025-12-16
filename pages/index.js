import Link from "next/link";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1>Learn Trading & Build Wealth</h1>
      <p>We don’t promise profits. We teach discipline & psychology.</p>

      <div style={{ marginTop: 30 }}>
        <Link href="/indicator">
          <button style={btnDark}>View Indicator</button>
        </Link>
      </div>
    </main>
  );
}

const btnDark = {
  padding: "12px 22px",
  background: "#000",
  color: "#fff",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer"
};
