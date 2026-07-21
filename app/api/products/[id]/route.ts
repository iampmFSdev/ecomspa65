import { connectToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET({ params }: {params: Promise<{id: string}>}) {
    await connectToDatabase();
    const { id } = await params;

    try {
        const product = await Product.findById(id).lean();
        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }
        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }
}