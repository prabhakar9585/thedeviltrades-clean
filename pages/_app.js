import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <footer className="footer">
        Disclaimer: Trading involves risk. We do not guarantee profits.
        Educational purpose only.
      </footer>
    </>
  );
}
