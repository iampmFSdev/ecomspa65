import Link from "next/link"
import Image from "next/image"
import { orders } from "@/lib/data"
import { Search, Filter } from "lucide-react"

export default function OrdersPage() {
  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">مدیریت سفارشات</h1>
      </div>

      {/* Filters and search */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6 animate-fade-up">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pr-10 p-2.5 focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="جستجو در سفارشات..."
            />
          </div>
          <div className="flex gap-4">
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 focus:ring-2 focus:ring-black focus:outline-none">
              <option value="">همه وضعیت‌ها</option>
              <option value="pending">در انتظار</option>
              <option value="processing">در حال پردازش</option>
              <option value="completed">تکمیل شده</option>
              <option value="cancelled">لغو شده</option>
            </select>
            <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2.5 px-4 rounded-lg transition-colors">
              <Filter className="w-4 h-4" />
              <span>فیلتر</span>
            </button>
          </div>
        </div>
      </div>

      {/* Orders table */}
      <div
        className="bg-white rounded-lg shadow-sm overflow-hidden animate-fade-up"
        style={{ animationDelay: "100ms" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="py-4 px-6 font-medium">شماره سفارش</th>
                <th className="py-4 px-6 font-medium">محصول</th>
                <th className="py-4 px-6 font-medium">مشتری</th>
                <th className="py-4 px-6 font-medium">مبلغ</th>
                <th className="py-4 px-6 font-medium">وضعیت</th>
                <th className="py-4 px-6 font-medium">تاریخ</th>
                <th className="py-4 px-6 font-medium">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">{order.id}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={order.productImage || "/placeholder.svg"}
                        alt={order.productName}
                        width={40}
                        height={40}
                        className="rounded-md object-cover"
                      />
                      <span>{order.productName}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">{order.customerName}</td>
                  <td className="py-4 px-6">{order.totalPrice.toLocaleString()} تومان</td>
                  <td className="py-4 px-6">
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
                  <td className="py-4 px-6">{order.date}</td>
                  <td className="py-4 px-6">
                    <Link
                      href={`/admin/orders/${order.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      مشاهده
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
