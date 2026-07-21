import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { LayoutDashboard, Package, LogOut, Users, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "پنل مدیریت | فروشگاه ساده",
  description: "پنل مدیریت فروشگاه ساده",
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">پنل مدیریت</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/admin"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>داشبورد</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/orders"
                className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 text-black font-medium transition-colors"
              >
                <Package className="w-5 h-5" />
                <span>سفارشات</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Users className="w-5 h-5" />
                <span>مشتریان</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Settings className="w-5 h-5" />
                <span>تنظیمات</span>
              </Link>
            </li>
            <li className="pt-4 mt-4 border-t">
              <Link
                href="/"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 text-red-500 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>خروج</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
