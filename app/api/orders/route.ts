import { connectToDatabase } from "@/lib/mongodb";
import Order from "@/models/Order";
import Product from "@/models/Product";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        await connectToDatabase();

        const body = await request.json();
        const { items, shipping } = body;

        // Validate items and fetch product details
        let total = 0;
        const orderItems = [];

        for (const item of items) {
            const product = await Product.findById(item.productId).lean();
            if (!product) {
                return NextResponse.json(
                    { error: `Product ${item.productId} not found` },
                    { status: 400 }
                );
            }
            const price = product.price;
            total += price * item.quantity;
            orderItems.push({
                productId: product._id,
                name: product.name,
                price: price,
                quantity: item.quantity,
            });
        }

        // 1. Create Stripe Payment Intent
        // const paymentIntent = await stripe.paymentIntents.create({
        //     amount: Math.round(total * 100), // in cents
        //     currency: "usd", // or "irr" if you use IRR (adjust accordingly)
        //     metadata: { integration_check: "accept_a_payment" },
        // });

        // 2. Save order with pending payment
        const order = await Order.create({
            items: orderItems,
            total,
            shipping,
            // stripePaymentIntentId: paymentIntent.id,
            paymentStatus: "pending",
        });

        return NextResponse.json({
            orderId: order._id,
            // clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Order creation error:", error);
        return NextResponse.json(
            { error: "Failed to create order" },
            { status: 500 }
        );
    }
}