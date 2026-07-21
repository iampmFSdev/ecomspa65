import { connectToDatabase } from "@/lib/mongodb";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

const ADMIN_SECRET = process.env.ADMIN_SECRET;

export async function GET(request) {
    const authHeader = request.headers.get("x-admin-key");
    if (authHeader !== ADMIN_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;

    const [orders, total] = await Promise.all([
        Order.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
        Order.countDocuments(),
    ]);

    return NextResponse.json({
        orders,
        pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
}