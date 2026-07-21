import { connectToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";
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
    const { name, price, image, description, category } = body;

    const product = await Product.findByIdAndUpdate(
        id,
        { name, price, image, description, category },
        { new: true, runValidators: true }
    ).lean();

    if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
}