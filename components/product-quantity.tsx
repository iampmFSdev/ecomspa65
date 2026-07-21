"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"

export default function ProductQuantity() {
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity((prev) => Math.min(prev + 1, 10))
  }

  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className="flex items-center">
      <span className="ml-3 text-gray-700">تعداد:</span>
      <div className="flex items-center border rounded-lg overflow-hidden">
        <button
          type="button"
          onClick={decrement}
          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-10 text-center">{quantity}</span>
        <button
          type="button"
          onClick={increment}
          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
