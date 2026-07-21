"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

type OrderStatus = "pending" | "processing" | "completed" | "cancelled"

interface OrderStatusUpdateProps {
  orderId: string
  currentStatus: OrderStatus
}

export default function OrderStatusUpdate({ orderId, currentStatus }: OrderStatusUpdateProps) {
  const [status, setStatus] = useState<OrderStatus>(currentStatus)
  const [isUpdating, setIsUpdating] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value as OrderStatus)
  }

  const updateStatus = () => {
    setIsUpdating(true)

    // Simulate API call
    setTimeout(() => {
      setIsUpdating(false)
      setShowSuccess(true)

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <select
          value={status}
          onChange={handleStatusChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 focus:ring-2 focus:ring-black focus:outline-none"
        >
          <option value="pending">در انتظار</option>
          <option value="processing">در حال پردازش</option>
          <option value="completed">تکمیل شده</option>
          <option value="cancelled">لغو شده</option>
        </select>

        <button
          onClick={updateStatus}
          disabled={isUpdating || status === currentStatus}
          className="bg-black text-white px-4 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400"
        >
          {isUpdating ? "در حال به‌روزرسانی..." : "به‌روزرسانی وضعیت"}
        </button>
      </div>

      {showSuccess && (
        <div className="mt-4 flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg animate-fade-in">
          <CheckCircle className="w-5 h-5" />
          <span>وضعیت سفارش با موفقیت به‌روزرسانی شد.</span>
        </div>
      )}
    </div>
  )
}
