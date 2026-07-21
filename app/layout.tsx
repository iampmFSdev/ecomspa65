import type React from "react"
import type { Metadata } from "next"
import { Inter, Vazirmatn } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Vazirmatn({ subsets: ["arabic"] })

export const metadata: Metadata = {
  title: "فروشگاه ساده",
  description: " فروشگاه ساده",
    // generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
