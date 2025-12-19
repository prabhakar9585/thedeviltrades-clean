import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const data = req.body;

  const filePath = path.join(process.cwd(), "purchases.json");

  let existing = [];
  if (fs.existsSync(filePath)) {
    existing = JSON.parse(fs.readFileSync(filePath));
  }

  existing.push({
    ...data,
    date: new Date().toISOString(),
  });

  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  res.status(200).json({
    success: true,
    paymentId: data.paymentId,
  });
}
