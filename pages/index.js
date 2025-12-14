export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* HEADER */}
      <header style={{
        padding: "20px",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2>The Devil Trades</h2>
        <a href="/courses" style={{ textDecoration: "none", fontWeight: "bold" }}>
          Courses
        </a>
      </header>

      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "80px 20px",
        background: "#f9fafb"
      }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Learn Trading & Build Wealth
        </h1>
        <p style={{ fontSize: "18px", color: "#555", maxWidth: "600px", margin: "0 auto 30px" }}>
          Practical trading knowledge, structured courses, and real-world skills
          to help you grow financially.
        </p>

        <a href="/courses">
          <button style={{
            padding: "14px 28px",
            fontSize: "16px",
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            Browse Courses
          </button>
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "20px",
        fontSize: "14px",
        color: "#777"
      }}>
        © {new Date().getFullYear()} The Devil Trades. All rights reserved.
      </footer>
    </div>
  );
}
