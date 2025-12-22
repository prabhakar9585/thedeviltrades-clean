import Head from "next/head";
import Link from "next/link";

export default function PurchaseHome() {
  return (
    <>
      <Head>
        <title>Purchase | Devil Trades</title>
      </Head>

      <section className="purchase-home">
        <Link href="/purchase/indicator" className="card">
          Indicator
        </Link>

        <div className="card disabled">
          Trading Bot (Coming Soon)
        </div>
      </section>

      <style jsx>{`
        .purchase-home {
          min-height: calc(100vh - 160px);
          background: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
        }

        .card {
          padding: 40px 60px;
          border: 1px solid #333;
          color: #fff;
          font-size: 22px;
          text-decoration: none;
          cursor: pointer;
        }

        .card:hover {
          background: #ff4d00;
          color: #000;
        }

        .disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}
