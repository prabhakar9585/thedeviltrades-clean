import Link from "next/link";

export default function Home() {
  return (
    <main className="hero">
      <h1>
        Learn Trading <br /> & Build Wealth
      </h1>

      <p>
        We don’t promise profits.  
        We teach discipline, psychology, and real market strategy.
      </p>

      <div className="buttons">
        <Link href="/courses" className="btn primary">
          Browse Courses
        </Link>

        <a href="#indicator" className="btn outline">
          View Indicator
        </a>
      </div>
    </main>
  );
}
