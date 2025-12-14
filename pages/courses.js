export default function Courses() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Our Courses
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        maxWidth: "900px",
        margin: "0 auto"
      }}>

        {/* COURSE CARD */}
        <div style={cardStyle}>
          <h3>Trading Fundamentals</h3>
          <p>Learn basics of stock market & trading.</p>
          <strong>₹4,999</strong>
        </div>

        <div style={cardStyle}>
          <h3>Technical Analysis</h3>
          <p>Charts, indicators, and strategies.</p>
          <strong>₹6,999</strong>
        </div>

        <div style={cardStyle}>
          <h3>Options Trading</h3>
          <p>Advanced options strategies.</p>
          <strong>₹8,999</strong>
        </div>

      </div>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #eee",
  borderRadius: "8px",
  padding: "20px",
  textAlign: "center",
  background: "#fff"
};
