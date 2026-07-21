import { connectToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        await connectToDatabase();

        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "8", 10);
        const search = searchParams.get("search") || "";
        const sort = searchParams.get("sort") || "createdAt";

        let filter = {};
        if (search) {
            filter = {
                $or: [
                    { name: { $regex: search, $options: "i" } },
                    { description: { $regex: search, $options: "i" } },
                ],
            };
        }

        const skip = (page - 1) * limit;

        let sortOption = {};
        if (sort === "priceAsc") sortOption = { price: 1 };
        else if (sort === "priceDesc") sortOption = { price: -1 };
        else sortOption = { createdAt: -1 };

        const [products, total] = await Promise.all([
            Product.find(filter).sort(sortOption).skip(skip).limit(limit).lean(),
            Product.countDocuments(filter),
        ]);

        const totalPages = Math.ceil(total / limit);

        return NextResponse.json({
            products,
            pagination: { page, limit, total, totalPages },
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}