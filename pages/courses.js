import Head from "next/head";

export default function Courses() {
  return (
    <>
      <Head>
        <title>Courses | Devil Trades</title>
      </Head>

      <section className="coming-soon">
        <img
          src="/coming-soon.png"  /* 🔴 RENAME FILE IF NEEDED */
          alt="Coming Soon"
        />
      </section>

      <style jsx>{`
        .coming-soon {
          min-height: calc(100vh - 160px);
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .coming-soon img {
          max-width: 900px;
          width: 90%;
          height: auto;
          object-fit: contain;
        }
      `}</style>
    </>
  );
}
