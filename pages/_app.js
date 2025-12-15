import Link from "next/link";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Devil Trades Logo" />
          <span>Devil Trades</span>
        </div>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <a href="#indicator">Indicator</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <Component {...pageProps} />
    </>
  );
}
