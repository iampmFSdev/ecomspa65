// import Image from "next/image"
// import { notFound } from "next/navigation"
// import { products } from "@/lib/data"
// import CheckoutForm from "@/components/checkout-form"
// import { CreditCard, Package, ShieldCheck, Truck } from "lucide-react"

// export default function CheckoutPage({ params }: { params: Promise<{ id: string }> }) {
//   const product = products.find(async (p) => p.id === (await params).id)

//   if (!product) {
//     return notFound()
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-2xl font-bold mb-8 text-center">تکمیل خرید</h1>

//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="md:col-span-2">
//             <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
//               <h2 className="text-lg font-semibold mb-4">اطلاعات شخصی</h2>
//               <CheckoutForm product={product} />
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-sm">
//               <h2 className="text-lg font-semibold mb-4">روش‌های پرداخت</h2>
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                 <div className="border rounded-lg p-4 text-center cursor-pointer hover:border-black transition-colors">
//                   <CreditCard className="mx-auto mb-2 h-6 w-6" />
//                   <span className="text-sm">کارت بانکی</span>
//                 </div>
//                 <div className="border rounded-lg p-4 text-center cursor-pointer hover:border-black transition-colors">
//                   <ShieldCheck className="mx-auto mb-2 h-6 w-6" />
//                   <span className="text-sm">پرداخت امن</span>
//                 </div>
//                 <div className="border rounded-lg p-4 text-center cursor-pointer hover:border-black transition-colors">
//                   <Package className="mx-auto mb-2 h-6 w-6" />
//                   <span className="text-sm">پرداخت در محل</span>
//                 </div>
//                 <div className="border rounded-lg p-4 text-center cursor-pointer hover:border-black transition-colors">
//                   <Truck className="mx-auto mb-2 h-6 w-6" />
//                   <span className="text-sm">تحویل اکسپرس</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="md:col-span-1">
//             <div className="bg-white p-6 rounded-xl shadow-sm sticky top-6">
//               <h2 className="text-lg font-semibold mb-4">خلاصه سفارش</h2>

//               <div className="flex items-center gap-4 pb-4 border-b">
//                 <Image
//                   src={product.image || "/placeholder.svg"}
//                   alt={product.name}
//                   width={80}
//                   height={80}
//                   className="w-20 h-20 object-cover rounded-lg"
//                 />
//                 <div>
//                   <h3 className="font-medium">{product.name}</h3>
//                   <p className="text-gray-600 text-sm">تعداد: ۱ عدد</p>
//                 </div>
//               </div>

//               <div className="mt-4 space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">قیمت کالا</span>
//                   <span>{product.price.toLocaleString()} تومان</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">هزینه ارسال</span>
//                   <span>رایگان</span>
//                 </div>
//                 <div className="flex justify-between font-bold pt-2 border-t mt-2">
//                   <span>جمع کل</span>
//                   <span>{product.price.toLocaleString()} تومان</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import CheckoutForm from "@/components/checkout-form";
import { CreditCard, Package, ShieldCheck, Truck } from "lucide-react";

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // ✅ Static product lookup (synchronous)
  const product = products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  /*
   * ─── API Integration (commented out) ──────────────────────────────
   * To fetch product from API instead of static data, uncomment:
   *
   * const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`);
   * if (!res.ok) return notFound();
   * const product = await res.json();
   *
   * Or, to create an order on checkout, you can POST to /api/orders
   * and pass the product ID and shipping info.
   * ──────────────────────────────────────────────────────────────────
   */

  return (
    <main className="min-h-screen bg-[#FAFAF9] py-10">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            تکمیل خرید
          </h1>
          <p className="mt-2 text-slate-500">اطلاعات خود را وارد کنید و سفارش را نهایی کنید</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column: Form & Payment */}
          <div className="space-y-6 lg:col-span-2">
            {/* Personal Information */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold text-slate-800">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FBC6D8] text-sm font-bold text-white">
                  ۱
                </span>
                اطلاعات شخصی
              </h2>
              <CheckoutForm product={product} />
            </div>

            {/* Payment Methods */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold text-slate-800">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FBC6D8] text-sm font-bold text-white">
                  ۲
                </span>
                روش پرداخت
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { icon: CreditCard, label: "کارت بانکی" },
                  { icon: ShieldCheck, label: "پرداخت امن" },
                  { icon: Package, label: "پرداخت در محل" },
                  { icon: Truck, label: "تحویل اکسپرس" },
                ].map((method, idx) => (
                  <div
                    key={idx}
                    className="flex cursor-pointer flex-col items-center gap-2 rounded-md border border-slate-200 p-4 text-center transition-colors hover:border-[#FBC6D8]/30 hover:bg-slate-50"
                  >
                    <method.icon className="h-5 w-5 text-slate-600" strokeWidth={1.75} />
                    <span className="text-sm font-medium text-slate-700">{method.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="mb-6 text-lg font-semibold text-slate-800">خلاصه سفارش</h2>

              {/* Product Preview */}
              <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-slate-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-medium text-slate-800">{product.name}</h3>
                  <p className="text-sm text-slate-500">تعداد: ۱ عدد</p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">قیمت کالا</span>
                  <span className="font-medium">{product.price.toLocaleString()} تومان</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">هزینه ارسال</span>
                  <span className="font-medium text-emerald-600">رایگان</span>
                </div>
                <div className="mt-3 flex justify-between border-t border-slate-200 pt-3 text-base font-bold">
                  <span>جمع کل</span>
                  <span className="text-[#FBC6D8]">{product.price.toLocaleString()} تومان</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                form="checkout-form"
                className="mt-6 w-full rounded-md bg-[#FBC6D8] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d2d47]"
              >
                تایید و پرداخت
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    )
  // return (
  //   <main className="min-h-screen bg-gradient-to-b from-slate-50/50 via-white to-slate-100/30 py-8">
  //     <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
  //       {/* Page Header */}
  //       <div className="text-center mb-10 animate-fade-up">
  //         <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
  //           تکمیل خرید
  //         </h1>
  //         <p className="mt-2 text-slate-500">اطلاعات خود را وارد کنید و سفارش را نهایی کنید</p>
  //       </div>

  //       <div className="grid lg:grid-cols-3 gap-8">
  //         {/* Left Column: Form & Payment */}
  //         <div className="lg:col-span-2 space-y-6">
  //           {/* Personal Information */}
  //           <div className="rounded-2xl bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-xl shadow-slate-200/60 ring-1 ring-white/50 transition-all hover:shadow-slate-300/70 animate-fade-up">
  //             <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-6">
  //               <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">
  //                 ۱
  //               </span>
  //               اطلاعات شخصی
  //             </h2>
  //             <CheckoutForm product={product} />
  //           </div>

  //           {/* Payment Methods */}
  //           <div className="rounded-2xl bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-xl shadow-slate-200/60 ring-1 ring-white/50 transition-all hover:shadow-slate-300/70 animate-fade-up">
  //             <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-6">
  //               <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">
  //                 ۲
  //               </span>
  //               روش پرداخت
  //             </h2>
  //             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
  //               {[
  //                 { icon: CreditCard, label: "کارت بانکی" },
  //                 { icon: ShieldCheck, label: "پرداخت امن" },
  //                 { icon: Package, label: "پرداخت در محل" },
  //                 { icon: Truck, label: "تحویل اکسپرس" },
  //               ].map((method, idx) => (
  //                 <div
  //                   key={idx}
  //                   className="group flex flex-col items-center gap-2 rounded-xl border border-slate-200/60 bg-white/40 p-4 text-center transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50/50 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
  //                 >
  //                   <method.icon className="h-6 w-6 text-slate-600 transition-colors group-hover:text-indigo-600" />
  //                   <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-700">
  //                     {method.label}
  //                   </span>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         </div>

  //         {/* Right Column: Order Summary */}
  //         <div className="lg:col-span-1">
  //           <div className="sticky top-6 rounded-2xl bg-white/70 backdrop-blur-md p-6 sm:p-8 shadow-xl shadow-slate-200/60 ring-1 ring-white/50 transition-all hover:shadow-slate-300/70 animate-fade-up">
  //             <h2 className="text-xl font-semibold text-slate-800 mb-6">خلاصه سفارش</h2>

  //             {/* Product Preview */}
  //             <div className="flex items-center gap-4 border-b border-slate-200/60 pb-4">
  //               <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
  //                 <Image
  //                   src={product.image || "/placeholder.svg"}
  //                   alt={product.name}
  //                   fill
  //                   className="object-cover transition-transform duration-300 hover:scale-105"
  //                 />
  //               </div>
  //               <div className="min-w-0 flex-1">
  //                 <h3 className="truncate font-medium text-slate-800">{product.name}</h3>
  //                 <p className="text-sm text-slate-500">تعداد: ۱ عدد</p>
  //               </div>
  //             </div>

  //             {/* Price Breakdown */}
  //             <div className="mt-4 space-y-2 text-sm">
  //               <div className="flex justify-between">
  //                 <span className="text-slate-600">قیمت کالا</span>
  //                 <span className="font-medium">{product.price.toLocaleString()} تومان</span>
  //               </div>
  //               <div className="flex justify-between">
  //                 <span className="text-slate-600">هزینه ارسال</span>
  //                 <span className="text-emerald-600 font-medium">رایگان</span>
  //               </div>
  //               <div className="flex justify-between border-t border-slate-200/60 pt-3 mt-3 text-base font-bold">
  //                 <span>جمع کل</span>
  //                 <span className="text-indigo-700">{product.price.toLocaleString()} تومان</span>
  //               </div>
  //             </div>

  //             {/* Action Button (optional) – could be used for final submit */}
  //             <button
  //               type="submit"
  //               form="checkout-form" // assuming CheckoutForm has id="checkout-form"
  //               className="mt-6 w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-300/60 hover:scale-[1.02] active:scale-[0.98]"
  //             >
  //               تایید و پرداخت
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // );
}