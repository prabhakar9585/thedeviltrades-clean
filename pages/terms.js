import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Devil Trades</title>
      </Head>

      <section className="terms-page">
        <h1>Terms & Conditions</h1>

        <p>
          Devil Trades provides trading tools and educational content only.
          We do not provide any guaranteed profit services.
        </p>

        <h2>1. No Financial Advice</h2>
        <p>
          All content, indicators, and strategies are for educational purposes
          only. Trading in financial markets involves risk.
        </p>

        <h2>2. Risk Disclosure</h2>
        <p>
          You acknowledge that trading involves the risk of loss. Past
          performance does not guarantee future results.
        </p>

        <h2>3. Subscription Usage</h2>
        <p>
          Indicator access is provided only to the registered TradingView ID.
          Sharing or reselling is strictly prohibited.
        </p>

        <h2>4. No Refund Policy</h2>
        <p>
          All purchases are final. No refunds will be provided under any
          circumstances.
        </p>

        <h2>5. Monthly Updates</h2>
        <p>
          Performance data and updates are published monthly on the last trading
          day.
        </p>

        <h2>6. Acceptance</h2>
        <p>
          By purchasing or using our services, you agree to all the terms listed
          above.
        </p>
      </section>

      <style jsx>{`
        .terms-page {
          background: #000;
          color: #fff;
          min-height: calc(100vh - 160px);
          padding: 60px 20px;
          max-width: 900px;
          margin: auto;
        }

        h1 {
          color: #ff3c00;
          margin-bottom: 30px;
          text-align: center;
        }

        h2 {
          margin-top: 30px;
          color: #ff3c00;
          font-size: 18px;
        }

        p {
          margin-top: 10px;
          line-height: 1.7;
          color: #ccc;
          font-size: 15px;
        }
      `}</style>
    </>
  );
}
