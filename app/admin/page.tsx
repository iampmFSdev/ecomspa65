import Link from "next/link"
import { orders } from "@/lib/data"
import { Package, DollarSign, ShoppingCart, Clock } from "lucide-react"

export default function AdminDashboard() {
  // Calculate stats
  const totalOrders = orders.length
  const totalRevenue = orders.reduce((sum, order) => sum + order.totalPrice, 0)
  const pendingOrders = orders.filter((order) => order.status === "pending").length
  const completedOrders = orders.filter((order) => order.status === "completed").length

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">داشبورد</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4 animate-fade-up">
          <div className="bg-blue-100 p-3 rounded-full">
            <ShoppingCart className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">کل سفارشات</p>
            <p className="text-2xl font-bold">{totalOrders}</p>
          </div>
        </div>

        <div
          className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          <div className="bg-green-100 p-3 rounded-full">
            <DollarSign className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">درآمد کل</p>
            <p className="text-2xl font-bold">{totalRevenue.toLocaleString()} تومان</p>
          </div>
        </div>

        <div
          className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="bg-yellow-100 p-3 rounded-full">
            <Clock className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">سفارشات در انتظار</p>
            <p className="text-2xl font-bold">{pendingOrders}</p>
          </div>
        </div>

        <div
          className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="bg-purple-100 p-3 rounded-full">
            <Package className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">سفارشات تکمیل شده</p>
            <p className="text-2xl font-bold">{completedOrders}</p>
          </div>
        </div>
      </div>

      {/* Recent orders */}
      <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">سفارشات اخیر</h2>
          <Link
            href="/admin/orders"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
          >
            مشاهده همه
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="py-3 px-4 font-medium">شماره سفارش</th>
                <th className="py-3 px-4 font-medium">مشتری</th>
                <th className="py-3 px-4 font-medium">محصول</th>
                <th className="py-3 px-4 font-medium">مبلغ</th>
                <th className="py-3 px-4 font-medium">وضعیت</th>
                <th className="py-3 px-4 font-medium">تاریخ</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {orders.slice(0, 5).map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{order.id}</td>
                  <td className="py-3 px-4">{order.customerName}</td>
                  <td className="py-3 px-4">{order.productName}</td>
                  <td className="py-3 px-4">{order.totalPrice.toLocaleString()} تومان</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
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
                  </td>
                  <td className="py-3 px-4">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
