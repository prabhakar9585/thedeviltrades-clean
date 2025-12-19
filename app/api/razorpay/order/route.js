import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: 5000 * 100, // ₹5000 in paise
      currency: "INR",
      receipt: "devil_v3_" + Date.now(),
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("RAZORPAY ERROR:", error);
    return NextResponse.json(
      { error: "Order creation failed" },
      { status: 500 }
    );
  }
}
