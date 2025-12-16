export default function Footer() {
  return (
    <footer className="footer">
      <p>
        ⚠️ <strong>Disclaimer:</strong> Trading in stock markets involves risk.
        We do not promise profits. All content is for educational purposes only.
        Past performance is not a guarantee of future results.
      </p>

      <p className="copyright">
        © {new Date().getFullYear()} Devil Trades. All rights reserved.
      </p>
    </footer>
  );
}
