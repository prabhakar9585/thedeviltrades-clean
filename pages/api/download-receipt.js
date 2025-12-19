import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";

export default function handler(req, res) {
  const { pid } = req.query;

  const purchases = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "purchases.json"))
  );

  const user = purchases.find(p => p.paymentId === pid);

  if (!user) return res.status(404).end("Receipt not found");

  const doc = new PDFDocument();
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=DevilTrades-${pid}.pdf`
  );

  doc.pipe(res);

  doc.fontSize(22).text("DEVIL TRADES", { align: "center" });
  doc.moveDown();
  doc.fontSize(16).text("Payment Receipt");
  doc.moveDown();

  doc.text(`Name: ${user.name}`);
  doc.text(`TradingView ID: ${user.tvId}`);
  doc.text(`Mobile: ${user.mobile}`);
  doc.text(`Transaction ID: ${user.paymentId}`);
  doc.text(`Amount: ₹5000`);
  doc.text(`Date: ${new Date(user.date).toLocaleString()}`);

  doc.end();
}
