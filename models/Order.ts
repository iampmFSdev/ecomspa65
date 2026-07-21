import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    name: String,
    price: Number,
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
});

const OrderSchema = new mongoose.Schema(
    {
        items: [OrderItemSchema],
        total: {
            type: Number,
            required: true,
        },
        shipping: {
            fullName: { type: String, required: true },
            address: { type: String, required: true },
            city: { type: String, required: true },
            postalCode: { type: String, required: true },
            country: { type: String, required: true },
            phone: { type: String, required: true },
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "paid", "failed"],
            default: "pending",
        },
        stripePaymentIntentId: String,
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);