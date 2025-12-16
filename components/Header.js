import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Devil Trades" />
        <span>Devil Trades</span>
      </div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>

        {/* Indicator Dropdown */}
        <div className={styles.dropdown}>
          <span className={styles.dropbtn}>Indicator ▾</span>

          <div className={styles.dropdownContent}>
            <div className={styles.subDropdown}>
              <span>NIFTY 50 ▸</span>

              <div className={styles.subContent}>
                <Link href="/indicator/profits">Profit Trades</Link>
                <Link href="/indicator/losses">Loss Trades</Link>
                <Link href="/indicator/notrades">No Trade Days</Link>
              </div>
            </div>
          </div>
        </div>

        <Link href="/accuracy">Accuracy</Link>
        <Link href="/purchase">Purchase</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
