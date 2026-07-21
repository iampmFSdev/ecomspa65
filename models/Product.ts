import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        image: {
            type: String,
            default: "/placeholder.svg",
        },
        description: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true, // adds createdAt and updatedAt
    }
);

export default mongoose.models.Product ||
    mongoose.model("Product", ProductSchema);