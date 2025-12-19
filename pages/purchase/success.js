import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className="success-page">
      <img src="/success.png" alt="Success" />

      <h1>Payment Successful</h1>

      <p>
        <strong>Transaction ID:</strong>
        <br />
        {pid}
      </p>

      <a href={`/api/download-receipt?pid=${pid}`} className="download-btn">
        Download Receipt (PDF)
      </a>

      <style jsx>{`
        .success-page {
          min-height: 100vh;
          background: #000;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        img {
          width: 140px;
          margin-bottom: 20px;
        }

        .download-btn {
          margin-top: 20px;
          padding: 14px 28px;
          background: #ff4d00;
          color: #000;
          font-weight: bold;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
