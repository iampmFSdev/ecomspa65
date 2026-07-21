import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { orders } from "@/lib/data"
import { ArrowRight, User, Phone, Mail, MapPin } from "lucide-react"
import OrderStatusUpdate from "@/components/order-status-update"

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = orders.find((o) => o.id === params.id)

  if (!order) {
    return notFound()
  }

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/orders" className="flex items-center gap-1 text-gray-600 hover:text-black transition-colors">
          <ArrowRight className="w-4 h-4" />
          <span>بازگشت به سفارشات</span>
        </Link>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">جزئیات سفارش {order.id}</h1>
        <span
          className={`inline-block px-3 py-1 text-sm rounded-full ${
            order.status === "completed"
              ? "bg-green-100 text-green-800"
              : order.status === "processing"
                ? "bg-blue-100 text-blue-800"
                : order.status === "pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
          }`}
        >
          {order.status === "completed"
            ? "تکمیل شده"
            : order.status === "processing"
              ? "در حال پردازش"
              : order.status === "pending"
                ? "در انتظار"
                : "لغو شده"}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-up">
            <h2 className="text-lg font-semibold mb-4">اطلاعات سفارش</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">شماره سفارش</p>
                <p className="font-medium">{order.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">تاریخ سفارش</p>
                <p className="font-medium">{order.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">مبلغ کل</p>
                <p className="font-medium">{order.totalPrice.toLocaleString()} تومان</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">تعداد</p>
                <p className="font-medium">{order.quantity} عدد</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <h2 className="text-lg font-semibold mb-4">محصول</h2>
            <div className="flex items-center gap-4">
              <Image
                src={order.productImage || "/placeholder.svg"}
                alt={order.productName}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium">{order.productName}</h3>
                <p className="text-gray-500 text-sm">
                  قیمت واحد: {(order.totalPrice / order.quantity).toLocaleString()} تومان
                </p>
                <p className="text-gray-500 text-sm">تعداد: {order.quantity} عدد</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-lg font-semibold mb-4">به‌روزرسانی وضعیت</h2>
            <OrderStatusUpdate orderId={order.id} currentStatus={order.status} />
          </div>
        </div>

        {/* Customer info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <h2 className="text-lg font-semibold mb-4">اطلاعات مشتری</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium">{order.customerName}</p>
                  <p className="text-sm text-gray-500">نام مشتری</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium">{order.customerPhone}</p>
                  <p className="text-sm text-gray-500">شماره تماس</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium">{order.customerEmail}</p>
                  <p className="text-sm text-gray-500">ایمیل</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium">{order.customerAddress}</p>
                  <p className="text-sm text-gray-500">آدرس</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
