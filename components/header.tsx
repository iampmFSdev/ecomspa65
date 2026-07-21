// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Close menu on resize to desktop
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsMenuOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isMenuOpen]);

//   const navLinks = [
//     { href: "/", label: "خانه" },
//     { href: "#", label: "محصولات" },
//     { href: "#", label: "درباره ما" },
//     { href: "#", label: "تماس با ما" },
//   ];

//   return (
//     <>
//       <header
//         className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
//             ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100/50"
//             : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
//           }`}
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex h-16 items-center justify-between lg:h-20">
//             {/* Logo */}
//             <Link
//               href="/"
//               className="flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-95"
//             >
//               <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-md shadow-blue-500/20 flex items-center justify-center">
//                 {/* <Image
//                   src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=200&auto=format&fit=crop"
//                   alt="لوگو"
//                   width={36}
//                   height={36}
//                   className="h-full w-full object-cover"
//                 /> */}
//                 <span className="text-bold text-white text-2
//                 xl">لوگو</span>
//               </div>
//               <span className="hidden text-xl font-bold tracking-tight text-gray-800 sm:block">
//                 فروشگاه ما
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:block">
//               <ul className="flex items-center gap-1">
//                 {navLinks.map((link) => (
//                   <li key={link.label}>
//                     <Link
//                       href={link.href}
//                       className="group relative rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-300 hover:text-gray-900 hover:bg-gray-100/80"
//                     >
//                       {link.label}
//                       <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-x-100" />
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition-all duration-200 hover:bg-gray-100 active:scale-90 md:hidden"
//               aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
//               aria-expanded={isMenuOpen}
//             >
//               <div className="relative h-5 w-5">
//                 <span
//                   className={`absolute left-0 h-0.5 w-full rounded-full bg-gray-700 transition-all duration-300 ${isMenuOpen
//                       ? "top-1/2 rotate-45 -translate-y-1/2"
//                       : "top-0"
//                     }`}
//                 />
//                 <span
//                   className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-gray-700 transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
//                     }`}
//                 />
//                 <span
//                   className={`absolute left-0 h-0.5 w-full rounded-full bg-gray-700 transition-all duration-300 ${isMenuOpen
//                       ? "top-1/2 -rotate-45 -translate-y-1/2"
//                       : "bottom-0"
//                     }`}
//                 />
//               </div>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 md:hidden ${isMenuOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//           }`}
//         onClick={() => setIsMenuOpen(false)}
//       />

//       {/* Mobile Menu Panel */}
//       <div
//         className={`fixed top-0 right-0 z-40 h-full w-3/4 max-w-xs bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//       >
//         <div className="flex h-full flex-col pt-20 px-6">
//           {/* Mobile Logo */}
//           <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-6">
//             <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-md shadow-blue-500/20">
//               <Image
//                 src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=200&auto=format&fit=crop"
//                 alt="لوگو"
//                 width={40}
//                 height={40}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <span className="text-xl font-bold tracking-tight text-gray-800">
//               فروشگاه ما
//             </span>
//           </div>

//           {/* Mobile Nav Links */}
//           <nav className="flex-1">
//             <ul className="space-y-1">
//               {navLinks.map((link, index) => (
//                 <li
//                   key={link.label}
//                   className="transform transition-all duration-300"
//                   style={{
//                     transitionDelay: isMenuOpen
//                       ? `${index * 60}ms`
//                       : "0ms",
//                     opacity: isMenuOpen ? 1 : 0,
//                     transform: isMenuOpen
//                       ? "translateX(0)"
//                       : "translateX(20px)",
//                   }}
//                 >
//                   <Link
//                     href={link.href}
//                     onClick={() => setIsMenuOpen(false)}
//                     className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100/80 hover:text-gray-900 active:scale-95"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Mobile Footer */}
//           <div className="border-t border-gray-100 pt-6 pb-8">
//             <p className="text-center text-sm text-gray-400">
//               © 2026 فروشگاه ما
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "خانه", href: "/" },
  { label: "محصولات", href: "/products" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
];

export default function Header({ isScrolled = false }: { isScrolled?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled
            ? "border-slate-200 bg-white shadow-sm"
            : "border-slate-100 bg-white"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FBC6D8]">
                <span className="text-lg font-bold text-white">ن</span>
              </div>
              <span className="hidden text-lg font-bold tracking-tight text-[#FBC6D8] sm:block">
                نام برند
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group relative rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-50 hover:text-[#FBC6D8]"
                    >
                      {link.label}
                      <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-[#C9A25D] transition-transform duration-200 group-hover:scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-[#FBC6D8] transition-colors duration-200 hover:bg-slate-100 md:hidden"
              aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
              aria-expanded={isMenuOpen}
            >
              <div className="relative h-5 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "top-1/2 rotate-45 -translate-y-1/2" : "top-0"
                    }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "top-1/2 -rotate-45 -translate-y-1/2" : "bottom-0"
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-3/4 max-w-xs bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex h-full flex-col pt-20 px-6">
          {/* Mobile Logo */}
          <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FBC6D8]">
              <span className="text-base font-bold text-white">ن</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-[#FBC6D8]">
              نام برند
            </span>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50 hover:text-[#FBC6D8]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Footer */}
          <div className="border-t border-slate-100 pt-6 pb-8">
            <p className="text-center text-sm text-slate-400">
              © ۲۰۲۶ نام برند
            </p>
          </div>
        </div>
      </div>
    </>
  );
}