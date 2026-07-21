import { connectToDatabase } from "@/lib/mongodb";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

const ADMIN_SECRET = process.env.ADMIN_SECRET;

export async function PUT(request: Request, { params }: {params: Promise<{id: string}>}) {
    const authHeader = request.headers.get("x-admin-key");
    if (authHeader !== ADMIN_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();
    const { id } = await params;
    const body = await request.json();
    const { status } = body; // e.g., "paid", "shipped", "delivered", "cancelled"

    if (!["pending", "paid", "shipped", "delivered", "cancelled"].includes(status)) {
        return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const order = await Order.findByIdAndUpdate(
        id,
        { paymentStatus: status },
        { new: true, runValidators: true }
    ).lean();

    if (!order) {
        return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order);
}