import { connectToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

const ADMIN_SECRET = process.env.ADMIN_SECRET;

export async function POST(request: Request) {
    const authHeader = request.headers.get("x-admin-key");
    if (authHeader !== ADMIN_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();
    const body = await request.json();
    const { name, price, image, description, category } = body;

    if (!name || !price) {
        return NextResponse.json(
            { error: "Name and price are required" },
            { status: 400 }
        );
    }

    const product = await Product.create({ name, price, image, description, category });
    return NextResponse.json(product, { status: 201 });
}