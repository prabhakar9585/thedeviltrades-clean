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
    </>
  );
}
