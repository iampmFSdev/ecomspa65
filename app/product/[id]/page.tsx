// import Image from "next/image"
// import Link from "next/link"
// import { notFound } from "next/navigation"
// import { products } from "@/lib/data"
// import { CheckCircle, Package, Truck } from "lucide-react"
// import ProductQuantity from "@/components/product-quantity"

import ProductQuantity from "@/components/product-quantity";
import { products } from "@/lib/data";
import { ArrowLeft, CheckCircle, Package, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

// export default function ProductPage({ params }: { params: Promise<{id: string}> }) {
//   const product = products.find(async (p) => p.id === (await params).id)

//   if (!product) {
//     return notFound()
//   }

//   // return (
//   //   <div className="container mx-auto px-4 py-8">
//   //     <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-scale-in">
//   //       <div className="flex flex-col md:flex-row">
//   //         <div className="md:w-1/2 bg-gray-50 p-6 flex items-center justify-center">
//   //           <div className="relative w-full max-w-md aspect-square animate-fade-in" style={{ animationDelay: "200ms" }}>
//   //             <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
//   //           </div>
//   //         </div>

//   //         <div className="md:w-1/2 p-6 md:p-10">
//   //           <div className="mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
//   //             <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
//   //               موجود
//   //             </span>
//   //           </div>

//   //           <h1 className="text-2xl md:text-3xl font-bold animate-fade-up" style={{ animationDelay: "200ms" }}>
//   //             {product.name}
//   //           </h1>
//   //           <p
//   //             className="text-2xl font-semibold mt-2 text-gray-900 animate-fade-up"
//   //             style={{ animationDelay: "300ms" }}
//   //           >
//   //             {product.price.toLocaleString()} تومان
//   //           </p>

//   //           <div className="my-6 border-t border-b py-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
//   //             <p className="text-gray-700 leading-relaxed">{product.description}</p>
//   //           </div>

//   //           <div className="animate-fade-up" style={{ animationDelay: "500ms" }}>
//   //             <ProductQuantity />
//   //           </div>

//   //           <div className="mt-6 animate-fade-up" style={{ animationDelay: "600ms" }}>
//   //             <Link
//   //               href={`/checkout/${product.id}`}
//   //               className="w-full bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 inline-block text-center transform hover:scale-[1.02] active:scale-[0.98] btn-hover-effect"
//   //             >
//   //               خرید محصول
//   //             </Link>
//   //           </div>

//   //           <div
//   //             className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-up"
//   //             style={{ animationDelay: "700ms" }}
//   //           >
//   //             <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-3px]">
//   //               <CheckCircle className="w-5 h-5 text-green-600" />
//   //               <span className="text-sm">ضمانت اصالت کالا</span>
//   //             </div>
//   //             <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-3px]">
//   //               <Truck className="w-5 h-5 text-blue-600" />
//   //               <span className="text-sm">ارسال سریع</span>
//   //             </div>
//   //             <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-3px]">
//   //               <Package className="w-5 h-5 text-orange-600" />
//   //               <span className="text-sm">بسته‌بندی زیبا</span>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   // )

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-slate-50/50 via-white to-slate-100/30 py-8">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
//         {/* Back link */}
//         <Link
//           href="/"
//           className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-indigo-600 mb-6 group"
//         >
//           <span className="transition-transform duration-200 group-hover:-translate-x-1">→</span>
//           بازگشت به فروشگاه
//         </Link>

//         {/* Product Card */}
//         <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl shadow-slate-200/60 ring-1 ring-white/50 transition-all hover:shadow-slate-300/70">
//           <div className="flex flex-col lg:flex-row">
//             {/* Image Section */}
//             <div className="lg:w-1/2 bg-gradient-to-br from-slate-100/80 to-indigo-50/50 p-8 flex items-center justify-center relative">
//               <div
//                 className="relative w-full max-w-md aspect-square animate-fade-up"
//                 style={{ animationDelay: "100ms" }}
//               >
//                 <Image
//                   src={product.image || "/placeholder.svg"}
//                   alt={product.name}
//                   fill
//                   className="object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
//                 />
//               </div>
//               {/* Decorative dots */}
//               <div className="absolute inset-0 pointer-events-none">
//                 <div className="absolute top-8 right-8 h-20 w-20 rounded-full bg-indigo-200/30 blur-2xl" />
//                 <div className="absolute bottom-8 left-8 h-32 w-32 rounded-full bg-purple-200/20 blur-3xl" />
//               </div>
//             </div>

//             {/* Details Section */}
//             <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col">
//               {/* Stock badge */}
//               <div className="mb-4 animate-fade-up" style={{ animationDelay: "150ms" }}>
//                 <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 px-3.5 py-1 text-xs font-medium text-emerald-700 backdrop-blur-sm ring-1 ring-emerald-200/30">
//                   <span className="relative flex h-2 w-2">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
//                     <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
//                   </span>
//                   موجود در انبار
//                 </span>
//               </div>

//               {/* Title */}
//               <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 animate-fade-up" style={{ animationDelay: "200ms" }}>
//                 {product.name}
//               </h1>

//               {/* Price */}
//               <p className="mt-2 text-3xl font-bold text-indigo-700 animate-fade-up" style={{ animationDelay: "250ms" }}>
//                 {product.price.toLocaleString()} تومان
//               </p>

//               {/* Description */}
//               <div className="my-6 border-y border-slate-200/60 py-6 animate-fade-up" style={{ animationDelay: "300ms" }}>
//                 <p className="text-slate-700 leading-relaxed">{product.description}</p>
//               </div>

//               {/* Quantity + Add to Cart */}
//               <div className="animate-fade-up" style={{ animationDelay: "350ms" }}>
//                 <ProductQuantity />
//               </div>

//               {/* Buy Button */}
//               <div className="mt-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
//                 <Link
//                   href={`/checkout/${product.id}`}
//                   className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-300/60 hover:scale-[1.02] active:scale-[0.98]"
//                 >
//                   <span className="relative z-10">خرید محصول</span>
//                   <span className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                 </Link>
//               </div>

//               {/* Features */}
//               <div
//                 className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fade-up"
//                 style={{ animationDelay: "450ms" }}
//               >
//                 <div className="flex items-center gap-2.5 rounded-xl bg-white/50 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md hover:-translate-y-0.5">
//                   <CheckCircle className="h-5 w-5 text-emerald-600" />
//                   <span className="text-sm font-medium text-slate-700">ضمانت اصالت</span>
//                 </div>
//                 <div className="flex items-center gap-2.5 rounded-xl bg-white/50 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md hover:-translate-y-0.5">
//                   <Truck className="h-5 w-5 text-blue-600" />
//                   <span className="text-sm font-medium text-slate-700">ارسال سریع</span>
//                 </div>
//                 <div className="flex items-center gap-2.5 rounded-xl bg-white/50 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md hover:-translate-y-0.5">
//                   <Package className="h-5 w-5 text-orange-600" />
//                   <span className="text-sm font-medium text-slate-700">بسته‌بندی ویژه</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }


export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap params with React.use() – Next.js 15+ pattern
  const { id } = React.use(params) as { id: string };

  // const [product, setProduct] = useState<Product | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   async function fetchProduct() {
  //     try {
  //       setLoading(true);
  //       const res = await fetch(`/api/products/${id}`);
  //       if (!res.ok) {
  //         if (res.status === 404) {
  //           setError("not-found");
  //           return;
  //         }
  //         throw new Error("Failed to fetch product");
  //       }
  //       const data = await res.json();
  //       setProduct(data);
  //     } catch (err) {
  //       setError("error");
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchProduct();
  // }, [id]);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }
  // Handle loading
  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50/50 via-white to-slate-100/30">
  //       <div className="flex flex-col items-center gap-4">
  //         <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
  //         <p className="text-slate-500 text-sm">در حال بارگذاری محصول...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // // Handle not found
  // if (error === "not-found" || !product) {
  //   return notFound();
  // }

  // // Handle other errors
  // if (error === "error") {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50/50 via-white to-slate-100/30">
  //       <div className="text-center">
  //         <p className="text-red-600">مشکلی در دریافت محصول پیش آمد.</p>
  //         <Link href="/" className="mt-4 inline-block text-indigo-600 underline">
  //           بازگشت به فروشگاه
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <main className="min-h-screen bg-[#FAFAF9] py-10">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-[#152238]"
        >
          <ArrowLeft className="h-4 w-4 rotate-180" />
          بازگشت به فروشگاه
        </Link>

        {/* Product Card */}
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="flex items-center justify-center bg-slate-50 p-8 lg:w-1/2">
              <div className="relative aspect-square w-full max-w-md">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col p-6 sm:p-8 lg:w-1/2 lg:p-10">
              {/* Stock badge */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 rounded bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  موجود در انبار
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                {product.name}
              </h1>

              {/* Price */}
              <p className="mt-2 text-2xl font-bold text-[#152238]">
                {product.price.toLocaleString()} تومان
              </p>

              {/* Description */}
              <div className="my-6 border-y border-slate-200 py-6">
                <p className="leading-relaxed text-slate-700">{product.description}</p>
              </div>

              {/* Quantity + Add to Cart */}
              <ProductQuantity />

              {/* Buy Button */}
              <Link
                href={`/checkout/${product.id}`}
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#152238] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d2d47]"
              >
                خرید محصول
              </Link>

              {/* Features */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-2.5 rounded-md border border-slate-200 px-3 py-2.5">
                  <CheckCircle className="h-5 w-5 text-[#152238]" strokeWidth={1.75} />
                  <span className="text-sm font-medium text-slate-700">ضمانت اصالت</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-md border border-slate-200 px-3 py-2.5">
                  <Truck className="h-5 w-5 text-[#152238]" strokeWidth={1.75} />
                  <span className="text-sm font-medium text-slate-700">ارسال سریع</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-md border border-slate-200 px-3 py-2.5">
                  <Package className="h-5 w-5 text-[#152238]" strokeWidth={1.75} />
                  <span className="text-sm font-medium text-slate-700">بسته‌بندی ویژه</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
  // ✅ Product loaded – render the UI
  // return (
  //   <main className="min-h-screen bg-gradient-to-b from-slate-50/50 via-white to-slate-100/30 py-8">
  //     <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
  //       {/* Back link */}
  //       <Link
  //         href="/"
  //         className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-indigo-600 mb-6 group"
  //       >
  //         <span className="transition-transform duration-200 group-hover:-translate-x-1">→</span>
  //         بازگشت به فروشگاه
  //       </Link>

  //       {/* Product Card */}
  //       <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl shadow-slate-200/60 ring-1 ring-white/50 transition-all hover:shadow-slate-300/70">
  //         <div className="flex flex-col lg:flex-row">
  //           {/* Image Section */}
  //           <div className="lg:w-1/2 bg-gradient-to-br from-slate-100/80 to-indigo-50/50 p-8 flex items-center justify-center relative">
  //             <div className="relative w-full max-w-md aspect-square animate-fade-up">
  //               <Image
  //                 src={product.image || "/placeholder.svg"}
  //                 alt={product.name}
  //                 fill
  //                 className="object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
  //               />
  //             </div>
  //             {/* Decorative blobs */}
  //             <div className="absolute inset-0 pointer-events-none">
  //               <div className="absolute top-8 right-8 h-20 w-20 rounded-full bg-indigo-200/30 blur-2xl" />
  //               <div className="absolute bottom-8 left-8 h-32 w-32 rounded-full bg-purple-200/20 blur-3xl" />
  //             </div>
  //           </div>

  //           {/* Details Section */}
  //           <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col">
  //             {/* Stock badge */}
  //             <div className="mb-4 animate-fade-up">
  //               <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 px-3.5 py-1 text-xs font-medium text-emerald-700 backdrop-blur-sm ring-1 ring-emerald-200/30">
  //                 <span className="relative flex h-2 w-2">
  //                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
  //                   <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
  //                 </span>
  //                 موجود در انبار
  //               </span>
  //             </div>

  //             {/* Title */}
  //             <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 animate-fade-up">
  //               {product.name}
  //             </h1>

  //             {/* Price */}
  //             <p className="mt-2 text-3xl font-bold text-indigo-700 animate-fade-up">
  //               {product.price.toLocaleString()} تومان
  //             </p>

  //             {/* Description */}
  //             <div className="my-6 border-y border-slate-200/60 py-6 animate-fade-up">
  //               <p className="text-slate-700 leading-relaxed">{product.description}</p>
  //             </div>

  //             {/* Quantity + Add to Cart */}
  //             <div className="animate-fade-up">
  //               <ProductQuantity />
  //             </div>

  //             {/* Buy Button */}
  //             <div className="mt-6 animate-fade-up">
  //               <Link
  //                 href={`/checkout/${product.id}`}
  //                 className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-300/60 hover:scale-[1.02] active:scale-[0.98]"
  //               >
  //                 <span className="relative z-10">خرید محصول</span>
  //                 <span className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  //               </Link>
  //             </div>

  //             {/* Features */}
  //             <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fade-up">
  //               <div className="flex items-center gap-2.5 rounded-xl bg-white/50 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md hover:-translate-y-0.5">
  //                 <CheckCircle className="h-5 w-5 text-emerald-600" />
  //                 <span className="text-sm font-medium text-slate-700">ضمانت اصالت</span>
  //               </div>
  //               <div className="flex items-center gap-2.5 rounded-xl bg-white/50 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md hover:-translate-y-0.5">
  //                 <Truck className="h-5 w-5 text-blue-600" />
  //                 <span className="text-sm font-medium text-slate-700">ارسال سریع</span>
  //               </div>
  //               <div className="flex items-center gap-2.5 rounded-xl bg-white/50 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-md hover:-translate-y-0.5">
  //                 <Package className="h-5 w-5 text-orange-600" />
  //                 <span className="text-sm font-medium text-slate-700">بسته‌بندی ویژه</span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // );
}