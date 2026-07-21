import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t mt-12 py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 animate-fade-up">
            <p className="text-[#222] text-sm">© {new Date().getFullYear()} فروشگاه ما - تمامی حقوق محفوظ است.</p>
          </div>

          <div className="flex gap-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <Link
              href="#"
              className="text-[#222] hover:text-black text-sm transition-colors duration-300 hover:translate-y-[-2px] inline-block"
            >
              قوانین و مقررات
            </Link>
            <Link
              href="#"
              className="text-[#222] hover:text-black text-sm transition-colors duration-300 hover:translate-y-[-2px] inline-block"
            >
              حریم خصوصی
            </Link>
            <Link
              href="#"
              className="text-[#222] hover:text-black text-sm transition-colors duration-300 hover:translate-y-[-2px] inline-block"
            >
              تماس: ۰۹۱۲۳۴۵۶۷۸۹
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
