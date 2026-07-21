"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import { ArrowLeft, Search, SearchX, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { useState, useMemo, createContext, useContext, useEffect } from "react";

// ============================================================
// 1. THEME CONFIGURATION
// ============================================================
export const themes = {
  pink: {
    "--color-primary": "#FBC6D8",
    "--color-primary-light": "#FFE5EE",
    "--color-primary-dark": "#E5A3B9",
    "--color-on-primary": "#222222",

    "--color-background": "#FAFAF9",
    "--color-surface": "#FFFFFF",

    "--color-text": "#222222",
    "--color-text-muted": "#64748B",        // slate-500

    "--color-border": "#E2E8F0",            // slate-200

    "--color-button-bg": "#222222",
    "--color-button-text": "#FBC6D8",
    "--color-button-hover": "#1D2D47",

    "--color-price": "#FBC6D8",
    "--color-footer-bg": "#FBC6D8",
    "--color-footer-text": "#222",
    "--color-icon": "#FBC6D8",
  },

  darkBlue: {
    "--color-primary": "#152238",
    "--color-primary-light": "#2A3F5A",
    "--color-primary-dark": "#0B1A2E",
    "--color-on-primary": "#F0F0F0",

    "--color-background": "#0A0F1A",
    "--color-surface": "#1A2634",

    "--color-text": "#F0F0F0",
    "--color-text-muted": "#A0B0C0",

    "--color-border": "#2A3A4A",

    "--color-button-bg": "#FBC6D8",
    "--color-button-text": "#152238",
    "--color-button-hover": "#D4B374",

    "--color-price": "#FBC6D8",
    "--color-footer-bg": "#152238",
    "--color-footer-text": "#FFFFFF",
    "--color-icon": "#FBC6D8",
  },

  // add more shops here...
};

// ============================================================
// 2. THEME CONTEXT & PROVIDER
// ============================================================
const ThemeContext = createContext(null);

export const ThemeProvider = ({ children, initialTheme = "pink" }) => {
  const [themeName, setThemeName] = useState(initialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const theme = themes[themeName];
    if (theme) {
      Object.entries(theme).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }
  }, [themeName]);

  const changeTheme = (name) => {
    if (themes[name]) setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ themeName, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// ============================================================
// 3. ANIMATION VARIANTS (unchanged)
// ============================================================
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ============================================================
// 4. MAIN COMPONENT (fully themed with CSS variables)
// ============================================================
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const query = searchQuery.trim().toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        (product.description &&
          product.description.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const displayProducts = filteredProducts;

  // Optional: access current theme (if you need to show its name)
  // const { themeName } = useTheme();

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-[var(--color-primary)] px-4 py-16 sm:py-20 lg:py-24"
      >
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-[var(--color-on-primary)] sm:text-4xl md:text-5xl"
          >
            اکسسوری سویل
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
          >
            محصولات منتخب، کیفیت تضمین‌شده و ارسال سریع به سراسر ایران.
          </motion.p>
          <motion.a
            href="#products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-[var(--color-button-bg)] px-6 py-3 text-sm font-semibold text-[var(--color-button-text)] transition-colors hover:bg-[var(--color-button-hover)]"
          >
            مشاهده محصولات
            <ArrowLeft className="h-4 w-4" />
          </motion.a>
        </div>
      </motion.section>

      {/* Trust Bar */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
        className="border-b border-[var(--color-border)] bg-[var(--color-surface)]"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 py-5 sm:grid-cols-3">
          {[
            { icon: Truck, text: "ارسال سریع به سراسر ایران" },
            { icon: ShieldCheck, text: "پرداخت امن" },
            { icon: RotateCcw, text: "ضمانت بازگشت کالا" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center justify-center gap-2.5 text-[var(--color-text-muted)]"
            >
              <item.icon
                className="h-5 w-5 text-[var(--color-icon)]"
                strokeWidth={1.75}
              />
              <span className="text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Search & Products */}
      <div id="products" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto max-w-2xl relative z-10"
        >
          <div className="rounded-lg bg-[var(--color-surface)] p-1.5 shadow-md ring-1 ring-[var(--color-border)]">
            <div className="relative">
              <Search className="absolute right-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[var(--color-text-muted)]" />
              <input
                type="text"
                placeholder="جستجوی محصولات ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border-0 bg-transparent py-3 pr-11 pl-4 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/15"
                dir="rtl"
              />
              {searchQuery && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  onClick={() => setSearchQuery("")}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 rounded p-1 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-border)] hover:text-[var(--color-text)]"
                  aria-label="پاک کردن جستجو"
                >
                  ✕
                </motion.button>
              )}
            </div>
          </div>
          {searchQuery && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2.5 text-center text-sm text-[var(--color-text-muted)]"
            >
              {displayProducts.length} نتیجه برای «{searchQuery}»
            </motion.p>
          )}
        </motion.div>

        {/* Product Grid */}
        {displayProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-16 flex flex-col items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] py-16 text-center"
          >
            <SearchX className="h-10 w-10 text-[var(--color-text-muted)]" strokeWidth={1.5} />
            <p className="mt-4 text-base font-medium text-[var(--color-text)]">
              هیچ محصولی یافت نشد.
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">
              سعی کنید با عبارت دیگری جستجو کنید.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSearchQuery("")}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-on-primary)] transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              نمایش همه محصولات
              <ArrowLeft className="h-4 w-4" />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {displayProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group flex flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] transition-shadow duration-200 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-[var(--color-border)]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.isNew && (
                    <span className="absolute right-3 top-3 rounded bg-white/95 px-2.5 py-1 text-[11px] font-medium tracking-wide text-slate-700 ring-1 ring-slate-200">
                      جدید
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-sm font-medium text-[var(--color-text)] line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-base font-semibold text-[var(--color-price)]">
                    {product.price.toLocaleString()} تومان
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
                    <Link
                      href={`/product/${product.id}`}
                      className="inline-flex items-center text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                    >
                      مشاهده جزئیات
                      <ArrowLeft className="mr-1 h-4 w-4" />
                    </Link>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`/product/${product.id}`}
                        className="rounded-md bg-[var(--color-primary)] px-4 py-1.5 text-sm font-medium text-[var(--color-on-primary)] transition-colors hover:bg-[var(--color-primary-dark)]"
                      >
                        خرید
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 border-t border-[var(--color-border)] bg-[var(--color-footer-bg)]"
      >
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-right">
            <div>
              <p className="text-lg font-bold text-[var(--color-footer-text)]">نام برند</p>
              <p className="mt-1 text-sm text-[var(--color-footer-text)]/80">
                ارسال به سراسر ایران — پاسخگویی ۷ روز هفته
              </p>
            </div>
            <div className="flex gap-6 text-sm text-[var(--color-footer-text)]">
              <motion.div whileHover={{ y: -2 }}>
                <Link href="/" className="hover:opacity-80">خانه</Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link href="/products" className="hover:opacity-80">محصولات</Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link href="/contact" className="hover:opacity-80">تماس با ما</Link>
              </motion.div>
            </div>
          </div>
          <div className="mt-8 border-t border-[var(--color-footer-text)]/10 pt-6 text-center text-xs text-[var(--color-footer-text)]/60">
            © ۲۰۲۶ نام برند — تمامی حقوق محفوظ است
          </div>
        </div>
      </motion.footer>
    </main>
  );
}


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {motion} from 'framer-motion'
// import { products } from "@/lib/data";
// import { ArrowLeft, Search, SearchX, Truck, ShieldCheck, RotateCcw } from "lucide-react";
// import { useState, useMemo } from "react";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredProducts = useMemo(() => {
//     if (!searchQuery.trim()) return products;
//     const query = searchQuery.trim().toLowerCase();
//     return products.filter(
//       (product) =>
//         product.name.toLowerCase().includes(query) ||
//         (product.description &&
//           product.description.toLowerCase().includes(query))
//     );
//   }, [searchQuery]);

//   const displayProducts = filteredProducts;

//   return (
//     <main className="min-h-screen bg-[#FAFAF9]">
//       {/* Hero Section with entrance animation */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={fadeInUp}
//         className="relative bg-[#FBC6D8] px-4 py-16 sm:py-20 lg:py-24"
//       >
//         <div className="relative mx-auto max-w-4xl text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="text-3xl font-bold tracking-tight text-[#222] sm:text-4xl md:text-5xl"
//           >
//             اکسسوری سویل
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
//           >
//             محصولات منتخب، کیفیت تضمین‌شده و ارسال سریع به سراسر ایران.
//           </motion.p>
//           <motion.a
//             href="#products"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.4 }}
//             className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#222] px-6 py-3 text-sm font-semibold text-[#FBC6D8] transition-colors hover:bg-[#d4b374]"
//           >
//             مشاهده محصولات
//             <ArrowLeft className="h-4 w-4" />
//           </motion.a>
//         </div>
//       </motion.section>

//       {/* Trust Bar – entrance with slight delay */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={fadeInUp}
//         transition={{ delay: 0.3 }}
//         className="border-b border-slate-200 bg-white"
//       >
//         <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 py-5 sm:grid-cols-3">
//           {[
//             { icon: Truck, text: "ارسال سریع به سراسر ایران" },
//             { icon: ShieldCheck, text: "پرداخت امن" },
//             { icon: RotateCcw, text: "ضمانت بازگشت کالا" },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 + index * 0.1 }}
//               className="flex items-center justify-center gap-2.5 text-slate-600"
//             >
//               <item.icon className="h-5 w-5 text-[#FBC6D8]" strokeWidth={1.75} />
//               <span className="text-sm">{item.text}</span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Search & Products */}
//       <div id="products" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
//         {/* Search Bar with entrance */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="mx-auto max-w-2xl relative z-10"
//         >
//           <div className="rounded-lg bg-white p-1.5 shadow-md ring-1 ring-slate-200">
//             <div className="relative">
//               <Search className="absolute right-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
//               <input
//                 type="text"
//                 placeholder="جستجوی محصولات ..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full rounded-md border-0 bg-transparent py-3 pr-11 pl-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FBC6D8]/15"
//                 dir="rtl"
//               />
//               {searchQuery && (
//                 <motion.button
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   onClick={() => setSearchQuery("")}
//                   className="absolute left-3.5 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
//                   aria-label="پاک کردن جستجو"
//                 >
//                   ✕
//                 </motion.button>
//               )}
//             </div>
//           </div>
//           {searchQuery && (
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="mt-2.5 text-center text-sm text-slate-500"
//             >
//               {displayProducts.length} نتیجه برای «{searchQuery}»
//             </motion.p>
//           )}
//         </motion.div>

//         {/* Product Grid */}
//         {displayProducts.length === 0 ? (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="mt-16 flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-white py-16 text-center"
//           >
//             <SearchX className="h-10 w-10 text-slate-300" strokeWidth={1.5} />
//             <p className="mt-4 text-base font-medium text-slate-700">
//               هیچ محصولی یافت نشد.
//             </p>
//             <p className="text-sm text-slate-400">
//               سعی کنید با عبارت دیگری جستجو کنید.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setSearchQuery("")}
//               className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#FBC6D8] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1d2d47]"
//             >
//               نمایش همه محصولات
//               <ArrowLeft className="h-4 w-4" />
//             </motion.button>
//           </motion.div>
//         ) : (
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.1 }}
//             className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//           >
//             {displayProducts.map((product) => (
//               <motion.div
//                 key={product.id}
//                 variants={cardVariants}
//                 whileHover={{ y: -8, transition: { duration: 0.2 } }}
//                 className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow duration-200 hover:shadow-lg"
//               >
//                 {/* Image */}
//                 <div className="relative overflow-hidden bg-slate-100">
//                   <Image
//                     src={product.image || "/placeholder.svg"}
//                     alt={product.name}
//                     width={400}
//                     height={300}
//                     className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   {product.isNew && (
//                     <span className="absolute right-3 top-3 rounded bg-white/95 px-2.5 py-1 text-[11px] font-medium tracking-wide text-slate-700 ring-1 ring-slate-200">
//                       جدید
//                     </span>
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="flex flex-1 flex-col p-4">
//                   <h3 className="text-sm font-medium text-slate-800 line-clamp-1">
//                     {product.name}
//                   </h3>
//                   <p className="mt-1.5 text-base font-semibold text-[#FBC6D8]">
//                     {product.price.toLocaleString()} تومان
//                   </p>

//                   <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
//                     <Link
//                       href={`/product/${product.id}`}
//                       className="inline-flex items-center text-sm text-slate-600 transition-colors hover:text-[#FBC6D8]"
//                     >
//                       مشاهده جزئیات
//                       <ArrowLeft className="mr-1 h-4 w-4" />
//                     </Link>

//                     <motion.div
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Link
//                         href={`/product/${product.id}`}
//                         className="rounded-md bg-[#FBC6D8] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#1d2d47]"
//                       >
//                         خرید
//                       </Link>
//                     </motion.div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </div>

//       {/* Footer with entrance */}
//       <motion.footer
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="mt-16 border-t border-slate-200 bg-[#FBC6D8]"
//       >
//         <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
//           <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-right">
//             <div>
//               <p className="text-lg font-bold text-white">نام برند</p>
//               <p className="mt-1 text-sm ">
//                 ارسال به سراسر ایران — پاسخگویی ۷ روز هفته
//               </p>
//             </div>
//             <div className="flex gap-6 text-sm ">
//               <motion.div whileHover={{ y: -2 }}>
//                 <Link href="/" className="">خانه</Link>
//               </motion.div>
//               <motion.div whileHover={{ y: -2 }}>
//                 <Link href="/products" className="hover:text-white">محصولات</Link>
//               </motion.div>
//               <motion.div whileHover={{ y: -2 }}>
//                 <Link href="/contact" className="hover:text-white">تماس با ما</Link>
//               </motion.div>
//             </div>
//           </div>
//           <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
//             © ۲۰۲۶ نام برند — تمامی حقوق محفوظ است
//           </div>
//         </div>
//       </motion.footer>
//     </main>
//   );
//   // return (
//   //   <main className="min-h-screen bg-[#FAFAF9]">
//   //     {/* Hero Section */}
//   //     <section className="relative bg-[#FBC6D8] px-4 py-16 sm:py-20 lg:py-24">
//   //       <div className="relative mx-auto max-w-4xl text-center">
//   //         <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
//   //           نام برند
//   //         </h1>
//   //         <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
//   //           محصولات منتخب، کیفیت تضمین‌شده و ارسال سریع به سراسر ایران.
//   //         </p>
//   //         <a
//   //           href="#products"
//   //           className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#C9A25D] px-6 py-3 text-sm font-semibold text-[#FBC6D8] transition-colors hover:bg-[#d4b374]"
//   //         >
//   //           مشاهده محصولات
//   //           <ArrowLeft className="h-4 w-4" />
//   //         </a>
//   //       </div>
//   //     </section>

//   //     {/* Trust Bar */}
//   //     <div className="border-b border-slate-200 bg-white">
//   //       <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 py-5 sm:grid-cols-3">
//   //         <div className="flex items-center justify-center gap-2.5 text-slate-600">
//   //           <Truck className="h-5 w-5 text-[#FBC6D8]" strokeWidth={1.75} />
//   //           <span className="text-sm">ارسال سریع به سراسر ایران</span>
//   //         </div>
//   //         <div className="flex items-center justify-center gap-2.5 text-slate-600">
//   //           <ShieldCheck className="h-5 w-5 text-[#FBC6D8]" strokeWidth={1.75} />
//   //           <span className="text-sm">پرداخت امن</span>
//   //         </div>
//   //         <div className="flex items-center justify-center gap-2.5 text-slate-600">
//   //           <RotateCcw className="h-5 w-5 text-[#FBC6D8]" strokeWidth={1.75} />
//   //           <span className="text-sm">ضمانت بازگشت کالا</span>
//   //         </div>
//   //       </div>
//   //     </div>

//   //     {/* Search & Products */}
//   //     <div id="products" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
//   //       {/* Search Bar */}
//   //       <div className="mx-auto max-w-2xl relative z-10">
//   //         <div className="rounded-lg bg-white p-1.5 shadow-md ring-1 ring-slate-200">
//   //           <div className="relative">
//   //             <Search className="absolute right-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
//   //             <input
//   //               type="text"
//   //               placeholder="جستجوی محصولات ..."
//   //               value={searchQuery}
//   //               onChange={(e) => setSearchQuery(e.target.value)}
//   //               className="w-full rounded-md border-0 bg-transparent py-3 pr-11 pl-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FBC6D8]/15"
//   //               dir="rtl"
//   //             />
//   //             {searchQuery && (
//   //               <button
//   //                 onClick={() => setSearchQuery("")}
//   //                 className="absolute left-3.5 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
//   //                 aria-label="پاک کردن جستجو"
//   //               >
//   //                 ✕
//   //               </button>
//   //             )}
//   //           </div>
//   //         </div>
//   //         {searchQuery && (
//   //           <p className="mt-2.5 text-center text-sm text-slate-500">
//   //             {displayProducts.length} نتیجه برای «{searchQuery}»
//   //           </p>
//   //         )}
//   //       </div>

//   //       {/* Product Grid */}
//   //       {displayProducts.length === 0 ? (
//   //         <div className="mt-16 flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-white py-16 text-center">
//   //           <SearchX className="h-10 w-10 text-slate-300" strokeWidth={1.5} />
//   //           <p className="mt-4 text-base font-medium text-slate-700">
//   //             هیچ محصولی یافت نشد.
//   //           </p>
//   //           <p className="text-sm text-slate-400">
//   //             سعی کنید با عبارت دیگری جستجو کنید.
//   //           </p>
//   //           <button
//   //             onClick={() => setSearchQuery("")}
//   //             className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#FBC6D8] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1d2d47]"
//   //           >
//   //             نمایش همه محصولات
//   //             <ArrowLeft className="h-4 w-4" />
//   //           </button>
//   //         </div>
//   //       ) : (
//   //         <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//   //           {displayProducts.map((product) => (
//   //             <div
//   //               key={product.id}
//   //               className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow duration-200 hover:shadow-md"
//   //             >
//   //               {/* Image */}
//   //               <div className="relative overflow-hidden bg-slate-100">
//   //                 <Image
//   //                   src={product.image || "/placeholder.svg"}
//   //                   alt={product.name}
//   //                   width={400}
//   //                   height={300}
//   //                   className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
//   //                 />
//   //                 {product.isNew && (
//   //                   <span className="absolute right-3 top-3 rounded bg-white/95 px-2.5 py-1 text-[11px] font-medium tracking-wide text-slate-700 ring-1 ring-slate-200">
//   //                     جدید
//   //                   </span>
//   //                 )}
//   //               </div>

//   //               {/* Content */}
//   //               <div className="flex flex-1 flex-col p-4">
//   //                 <h3 className="text-sm font-medium text-slate-800 line-clamp-1">
//   //                   {product.name}
//   //                 </h3>
//   //                 <p className="mt-1.5 text-base font-semibold text-[#FBC6D8]">
//   //                   {product.price.toLocaleString()} تومان
//   //                 </p>

//   //                 <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
//   //                   <Link
//   //                     href={`/product/${product.id}`}
//   //                     className="inline-flex items-center text-sm text-slate-600 transition-colors hover:text-[#FBC6D8]"
//   //                   >
//   //                     مشاهده جزئیات
//   //                     <ArrowLeft className="mr-1 h-4 w-4" />
//   //                   </Link>

//   //                   <Link
//   //                     href={`/product/${product.id}`}
//   //                     className="rounded-md bg-[#FBC6D8] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#1d2d47]"
//   //                   >
//   //                     خرید
//   //                   </Link>
//   //                 </div>
//   //               </div>
//   //             </div>
//   //           ))}
//   //         </div>
//   //       )}
//   //     </div>

//   //     {/* Footer */}
//   //     <footer className="mt-16 border-t border-slate-200 bg-[#FBC6D8]">
//   //       <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
//   //         <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-right">
//   //           <div>
//   //             <p className="text-lg font-bold text-white">نام برند</p>
//   //             <p className="mt-1 text-sm text-slate-400">
//   //               ارسال به سراسر ایران — پاسخگویی ۷ روز هفته
//   //             </p>
//   //           </div>
//   //           <div className="flex gap-6 text-sm text-slate-300">
//   //             <Link href="/" className="hover:text-white">خانه</Link>
//   //             <Link href="/products" className="hover:text-white">محصولات</Link>
//   //             <Link href="/contact" className="hover:text-white">تماس با ما</Link>
//   //           </div>
//   //         </div>
//   //         <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
//   //           © ۲۰۲۶ نام برند — تمامی حقوق محفوظ است
//   //         </div>
//   //       </div>
//   //     </footer>
//   //   </main>
//   // );
// }










// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { products } from "@/lib/data";
// import { ArrowLeft, Search, SearchX } from "lucide-react";
// import { useState, useMemo } from "react";

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredProducts = useMemo(() => {
//     if (!searchQuery.trim()) return products;
//     const query = searchQuery.trim().toLowerCase();
//     return products.filter(
//       (product) =>
//         product.name.toLowerCase().includes(query) ||
//         (product.description &&
//           product.description.toLowerCase().includes(query))
//     );
//   }, [searchQuery]);

//   const displayProducts = filteredProducts;

//   return (
//     <main className="min-h-screen bg-[#FAFAF9]">
//       {/* Hero Section */}
//       <section className="relative bg-[#FBC6D8] px-4 py-16 sm:py-20 lg:py-24">
//         <div className="relative mx-auto max-w-4xl text-center">
//           {/* <span className="inline-block border-b border-[#C9A25D]/50 pb-1 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A25D]">
//             مجموعه جدید
//           </span> */}
//           <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
//             {/* به فروشگاه [نام برند] خوش آمدید */}
//             نام برند
            
//           </h1>
//           <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
//             محصولات منتخب، کیفیت تضمین‌شده و ارسال سریع به سراسر ایران.
//           </p>
//         </div>
//       </section>

//       {/* Search & Products */}
//       <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
//         {/* Search Bar */}
//         <div className="mx-auto max-w-2xl -mt-7 relative z-10">
//           <div className="rounded-lg bg-white p-1.5 shadow-md ring-1 ring-slate-200">
//             <div className="relative">
//               <Search className="absolute right-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
//               <input
//                 type="text"
//                 placeholder="جستجوی محصولات ..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full rounded-md border-0 bg-transparent py-3 pr-11 pl-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FBC6D8]/15"
//                 dir="rtl"
//               />
//               {searchQuery && (
//                 <button
//                   onClick={() => setSearchQuery("")}
//                   className="absolute left-3.5 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
//                   aria-label="پاک کردن جستجو"
//                 >
//                   ✕
//                 </button>
//               )}
//             </div>
//           </div>
//           {searchQuery && (
//             <p className="mt-2.5 text-center text-sm text-slate-500">
//               {displayProducts.length} نتیجه برای «{searchQuery}»
//             </p>
//           )}
//         </div>

//         {/* Product Grid */}
//         {displayProducts.length === 0 ? (
//           <div className="mt-16 flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-white py-16 text-center">
//             <SearchX className="h-10 w-10 text-slate-300" strokeWidth={1.5} />
//             <p className="mt-4 text-base font-medium text-slate-700">
//               هیچ محصولی یافت نشد.
//             </p>
//             <p className="text-sm text-slate-400">
//               سعی کنید با عبارت دیگری جستجو کنید.
//             </p>
//             <button
//               onClick={() => setSearchQuery("")}
//               className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#FBC6D8] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1d2d47]"
//             >
//               نمایش همه محصولات
//               <ArrowLeft className="h-4 w-4" />
//             </button>
//           </div>
//         ) : (
//           <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {displayProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow duration-200 hover:shadow-md"
//               >
//                 {/* Image */}
//                 <div className="relative overflow-hidden bg-slate-100">
//                   <Image
//                     src={product.image || "/placeholder.svg"}
//                     alt={product.name}
//                     width={400}
//                     height={300}
//                     className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   {product.isNew && (
//                     <span className="absolute right-3 top-3 rounded bg-white/95 px-2.5 py-1 text-[11px] font-medium tracking-wide text-slate-700 ring-1 ring-slate-200">
//                       جدید
//                     </span>
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="flex flex-1 flex-col p-4">
//                   <h3 className="text-sm font-medium text-slate-800 line-clamp-1">
//                     {product.name}
//                   </h3>
//                   <p className="mt-1.5 text-base font-semibold text-[#FBC6D8]">
//                     {product.price.toLocaleString()} تومان
//                   </p>

//                   <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
//                     <Link
//                       href={`/product/${product.id}`}
//                       className="inline-flex items-center text-sm text-slate-600 transition-colors hover:text-[#FBC6D8]"
//                     >
//                       مشاهده جزئیات
//                       <ArrowLeft className="mr-1 h-4 w-4" />
//                     </Link>

//                     <Link
//                       href={`/product/${product.id}`}
//                       className="rounded-md bg-[#FBC6D8] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#1d2d47]"
//                     >
//                       خرید
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }























// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { products } from "@/lib/data";
// import { ArrowLeft, Search } from "lucide-react";
// import { useState, useMemo } from "react";

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState("");

//   // Filter products based on search query (local filtering)
//   const filteredProducts = useMemo(() => {
//     if (!searchQuery.trim()) return products;
//     const query = searchQuery.trim().toLowerCase();
//     return products.filter(
//       (product) =>
//         product.name.toLowerCase().includes(query) ||
//         (product.description &&
//           product.description.toLowerCase().includes(query))
//     );
//   }, [searchQuery]);

//   // --- API SEARCH INTEGRATION (commented for future use) ---
//   // const [isSearching, setIsSearching] = useState(false);
//   // const [apiResults, setApiResults] = useState([]);
//   //
//   // useEffect(() => {
//   //   if (!searchQuery.trim()) {
//   //     setApiResults([]);
//   //     return;
//   //   }
//   //   const delayDebounce = setTimeout(async () => {
//   //     setIsSearching(true);
//   //     try {
//   //       const res = await fetch(`/api/products?search=${encodeURIComponent(searchQuery)}`);
//   //       const data = await res.json();
//   //       setApiResults(data);
//   //     } catch (error) {
//   //       console.error("Search API error:", error);
//   //     } finally {
//   //       setIsSearching(false);
//   //     }
//   //   }, 300);
//   //   return () => clearTimeout(delayDebounce);
//   // }, [searchQuery]);
//   //
//   // // Use apiResults if available, otherwise fallback to local filter
//   // const displayProducts = apiResults.length > 0 ? apiResults : filteredProducts;
//   // -----------------------------------------------------------

//   // For now we use local filtering; uncomment above and replace filteredProducts with displayProducts when ready.
//   const displayProducts = filteredProducts;

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-slate-50/50 via-white to-slate-100/30">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600/5 via-purple-600/5 to-pink-600/5 px-4 py-16 sm:py-20 lg:py-24">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5OTk5OTkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
//         <div className="relative mx-auto max-w-4xl text-center">
//           <div className="animate-fade-in-up">
//             <span className="inline-block rounded-full bg-indigo-100/80 px-4 py-1 text-xs font-semibold text-indigo-700 backdrop-blur-sm ring-1 ring-indigo-200/30">
//               ✨ جدیدترین محصولات
//             </span>
//             <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
//               به فروشگاه ما خوش آمدید
//             </h1>
//             <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
//               فروشگاه آنلاین ما، ارائه‌دهنده بهترین محصولات با کیفیت عالی و قیمت مناسب.
//               خرید آسان، ارسال سریع.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Search & Products */}
//       <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Search Bar */}
//         <div className="mx-auto max-w-2xl -mt-6 relative z-10">
//           <div className="rounded-2xl bg-white/70 p-1.5 shadow-xl shadow-slate-200/50 backdrop-blur-md ring-1 ring-white/50 transition-all hover:shadow-2xl hover:shadow-slate-200/60">
//             <div className="relative">
//               <Search className="absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
//               <input
//                 type="text"
//                 placeholder="جستجوی محصولات ..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full rounded-xl border-0 bg-transparent py-3.5 pr-12 pl-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
//                 dir="rtl"
//               />
//               {searchQuery && (
//                 <button
//                   onClick={() => setSearchQuery("")}
//                   className="absolute left-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
//                   aria-label="پاک کردن جستجو"
//                 >
//                   ✕
//                 </button>
//               )}
//             </div>
//           </div>
//           {searchQuery && (
//             <p className="mt-2 text-center text-sm text-slate-500">
//               {displayProducts.length} نتیجه برای “{searchQuery}”
//             </p>
//           )}
//         </div>

//         {/* Product Grid */}
//         {displayProducts.length === 0 ? (
//           <div className="mt-16 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white/50 py-16 text-center backdrop-blur-sm">
//             <div className="text-6xl">🔍</div>
//             <p className="mt-4 text-lg font-medium text-slate-700">هیچ محصولی یافت نشد.</p>
//             <p className="text-sm text-slate-400">سعی کنید با عبارت دیگری جستجو کنید.</p>
//             <button
//               onClick={() => setSearchQuery("")}
//               className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 active:scale-95"
//             >
//               نمایش همه محصولات
//               <ArrowLeft className="h-4 w-4" />
//             </button>
//           </div>
//         ) : (
//           <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {displayProducts.map((product, index) => (
//               <div
//                 key={product.id}
//                 className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/70 animate-fade-up"
//                 style={{ animationDelay: `${index * 80}ms` }}
//               >
//                 {/* Badge (optional: add logic for new/sale) */}
//                 <div className="absolute left-3 top-3 z-10">
//                   <span className="inline-block rounded-full bg-indigo-600/90 px-3 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
//                     جدید
//                   </span>
//                 </div>

//                 {/* Image */}
//                 <div className="relative overflow-hidden bg-slate-100">
//                   <Image
//                     src={product.image || "/placeholder.svg"}
//                     alt={product.name}
//                     width={400}
//                     height={300}
//                     className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   {/* Overlay gradient on hover */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                 </div>

//                 {/* Content */}
//                 <div className="flex flex-1 flex-col p-4">
//                   <h3 className="text-base font-semibold text-slate-800 line-clamp-1">
//                     {product.name}
//                   </h3>
//                   <p className="mt-1 text-lg font-bold text-indigo-700">
//                     {product.price.toLocaleString()} تومان
//                   </p>

//                   <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
//                     <Link
//                       href={`/product/${product.id}`}
//                       className="inline-flex items-center text-sm font-medium text-slate-600 transition-colors hover:text-indigo-700"
//                     >
//                       مشاهده جزئیات
//                       <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
//                     </Link>

//                     <Link
//                       href={`/product/${product.id}`}
//                       className="rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-indigo-700 hover:shadow-md hover:shadow-indigo-200 active:scale-95"
//                     >
//                       خرید
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
//   // return (
//   //   <div className="container mx-auto px-4 py-8">
//   //     <div className="text-center mb-10 animate-fade-in">
//   //       <h1 className="text-2xl font-bold mb-3">به فروشگاه ما خوش آمدید</h1>
//   //       <p className="text-gray-600 max-w-lg mx-auto">
//   //         فروشگاه آنلاین ما، ارائه دهنده بهترین محصولات با کیفیت عالی و قیمت
//   //         مناسب. خرید آسان، ارسال سریع.
//   //       </p>
//   //     </div>

//   //     {/* Search Bar */}
//   //     <div className="max-w-2xl mx-auto mb-8">
//   //       <div className="relative">
//   //         <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//   //         <input
//   //           type="text"
//   //           placeholder="جستجوی محصولات ..."
//   //           value={searchQuery}
//   //           onChange={(e) => setSearchQuery(e.target.value)}
//   //           className="w-full rounded-xl border border-gray-200 bg-white/80 py-3 pr-12 pl-4 text-sm transition-all duration-200 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200/50 backdrop-blur-sm shadow-sm hover:shadow-md"
//   //           dir="rtl"
//   //         />
//   //         {searchQuery && (
//   //           <button
//   //             onClick={() => setSearchQuery("")}
//   //             className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//   //             aria-label="پاک کردن جستجو"
//   //           >
//   //             ✕
//   //           </button>
//   //         )}
//   //       </div>
//   //       {/* Optional: show number of results */}
//   //       {searchQuery && (
//   //         <p className="mt-2 text-sm text-gray-500 text-center">
//   //           {displayProducts.length} نتیجه برای "{searchQuery}"
//   //         </p>
//   //       )}
//   //     </div>

//   //     {/* Product Grid */}
//   //     {displayProducts.length === 0 ? (
//   //       <div className="text-center py-12">
//   //         <p className="text-gray-500 text-lg">هیچ محصولی یافت نشد.</p>
//   //         <button
//   //           onClick={() => setSearchQuery("")}
//   //           className="mt-4 text-sm text-black underline underline-offset-4 hover:text-gray-600 transition-colors"
//   //         >
//   //           نمایش همه محصولات
//   //         </button>
//   //       </div>
//   //     ) : (
//   //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//   //         {displayProducts.map((product, index) => (
//   //           <div
//   //             key={product.id}
//   //             className="group border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out bg-white animate-fade-up"
//   //             style={{ animationDelay: `${index * 100}ms` }}
//   //           >
//   //             <div className="relative overflow-hidden">
//   //               <Image
//   //                 src={product.image || "/placeholder.svg"}
//   //                 alt={product.name}
//   //                 width={400}
//   //                 height={400}
//   //                 className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
//   //               />
//   //             </div>
//   //             <div className="p-4">
//   //               <h3 className="text-lg font-medium">{product.name}</h3>
//   //               <p className="text-gray-600 mt-1">
//   //                 {product.price.toLocaleString()} تومان
//   //               </p>

//   //               <div className="mt-4 flex justify-between items-center">
//   //                 <Link
//   //                   href={`/product/${product.id}`}
//   //                   className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700 transition-colors"
//   //                 >
//   //                   مشاهده جزئیات
//   //                   <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:translate-x-[-4px]" />
//   //                 </Link>

//   //                 <Link
//   //                   href={`/product/${product.id}`}
//   //                   className="bg-black text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-gray-800 transition-colors transform hover:scale-105 active:scale-95 duration-200"
//   //                 >
//   //                   خرید محصول
//   //                 </Link>
//   //               </div>
//   //             </div>
//   //           </div>
//   //         ))}
//   //       </div>
//   //     )}
//   //   </div>
//   // );
// }


// // import Image from "next/image"
// // import Link from "next/link"
// // import { products } from "@/lib/data"
// // import { ArrowLeft } from "lucide-react"

// // export default function Home() {
// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <div className="text-center mb-10 animate-fade-in">
// //         <h1 className="text-2xl font-bold mb-3">به فروشگاه ما خوش آمدید</h1>
// //         <p className="text-gray-600 max-w-lg mx-auto">
// //           فروشگاه آنلاین ما، ارائه دهنده بهترین محصولات با کیفیت عالی و قیمت مناسب. خرید آسان، ارسال سریع.
// //         </p>
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {products.map((product, index) => (
// //           <div
// //             key={product.id}
// //             className="group border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out bg-white animate-fade-up"
// //             style={{ animationDelay: `${index * 100}ms` }}
// //           >
// //             <div className="relative overflow-hidden">
// //               <Image
// //                 src={product.image || "/placeholder.svg"}
// //                 alt={product.name}
// //                 width={400}
// //                 height={400}
// //                 className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
// //               />
// //             </div>
// //             <div className="p-4">
// //               <h3 className="text-lg font-medium">{product.name}</h3>
// //               <p className="text-gray-600 mt-1">{product.price.toLocaleString()} تومان</p>

// //               <div className="mt-4 flex justify-between items-center">
// //                 <Link
// //                   href={`/product/${product.id}`}
// //                   className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700 transition-colors"
// //                 >
// //                   مشاهده جزئیات
// //                   <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:translate-x-[-4px]" />
// //                 </Link>

// //                 <Link
// //                   href={`/product/${product.id}`}
// //                   className="bg-black text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-gray-800 transition-colors transform hover:scale-105 active:scale-95 duration-200"
// //                 >
// //                   خرید محصول
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }


