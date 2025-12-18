import "../styles/globals.css";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />

      <main>
        <Component {...pageProps} />
      </main>

      <footer className="footer">
        Disclaimer: Trading involves risk. We do not guarantee profits.
        Educational purpose only.
      </footer>
    </>
  );
}
