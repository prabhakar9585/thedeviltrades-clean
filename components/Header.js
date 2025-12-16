import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        {/* LOGO */}
        <div className="logo">
          <img src="/logo.png" alt="Devil Trades" />
          <span>Devil Trades</span>
        </div>

        {/* NAV */}
        <nav className="nav">
          <Link href="/">Home</Link>

          {/* COURSES HOVER */}
          <div
            className="nav-item"
            onMouseEnter={() => setShowCourses(true)}
            onMouseLeave={() => setShowCourses(false)}
          >
            <span className="nav-link">Courses</span>

            {showCourses && (
              <div className="courses-dropdown">
                <img
                  src="/coming-soon.jpg"
                  alt="Courses Coming Soon"
                />
              </div>
            )}
          </div>

          <Link href="/#indicator">Indicator ▾</Link>
          <Link href="/accuracy">Accuracy</Link>
          <Link href="/purchase">Purchase</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
