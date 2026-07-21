"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { Product } from "@/lib/data"

interface CheckoutFormProps {
  product: Product
}

export default function CheckoutForm({ product }: CheckoutFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    postalCode: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order processing
    setTimeout(() => {
      alert(`سفارش شما با موفقیت ثبت شد!\n\nمحصول: ${product.name}\nقیمت: ${product.price.toLocaleString()} تومان`)
      router.push("/")
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
            نام و نام خانوادگی
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
            شماره تماس
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
          ایمیل (اختیاری)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="address" className="block mb-1 text-sm font-medium text-gray-700">
          آدرس
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          rows={3}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="postalCode" className="block mb-1 text-sm font-medium text-gray-700">
          کد پستی
        </label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          // className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400"
          className=" w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-300/60 hover:scale-[1.02] active:scale-[0.98]"

        >
          {isSubmitting ? "در حال پردازش..." : `پرداخت ${product.price.toLocaleString()} تومان`}
        </button>
      </div>
    </form>
  )
}
