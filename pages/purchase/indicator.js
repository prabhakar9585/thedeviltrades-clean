import Head from "next/head";
import Link from "next/link";

export default function IndicatorPurchase() {
  return (
    <>
      <Head>
        <title>Indicator | Purchase</title>
      </Head>

      <section className="indicator-page">
        <Link href="/purchase/devil-v3" className="indicator-card">
          THE DEVIL V3
        </Link>
      </section>

      <style jsx>{`
        .indicator-page {
          min-height: calc(100vh - 160px);
          background: #000;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .indicator-card {
          padding: 40px 80px;
          border: 1px solid #ff3c00;
          color: #ff3c00;
          font-size: 26px;
          text-decoration: none;
        }

        .indicator-card:hover {
          background: #ff3c00;
          color: #000;
        }
      `}</style>
    </>
  );
}
