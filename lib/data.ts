export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

export interface Order {
  id: string
  productId: string
  productName: string
  productImage: string
  quantity: number
  totalPrice: number
  customerName: string
  customerPhone: string
  customerEmail: string
  customerAddress: string
  status: "pending" | "processing" | "completed" | "cancelled"
  date: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "تیشرت مردانه طرح ساده",
    price: 180000,
    description: "تیشرت مردانه با طراحی ساده و جنس نخ پنبه درجه یک. مناسب برای استفاده روزانه با راحتی بالا.",
    image: "/2.jpg",
  },
  {
    id: "2",
    name: "کفش ورزشی زنانه",
    price: 450000,
    description: "کفش ورزشی زنانه با طراحی مدرن و کفی طبی. مناسب برای پیاده روی و ورزش های سبک.",
    image: "/1.jpg",
  },
  {
    id: "3",
    name: "کیف دستی چرم",
    price: 780000,
    description: "کیف دستی چرم طبیعی با دوخت دستی و کیفیت بالا. دارای جیب های متعدد و بند قابل تنظیم.",
    image: "/3.jpg",
  },
  // {
  //   id: "4",
  //   name: "ساعت مچی کلاسیک",
  //   price: 1250000,
  //   description: "ساعت مچی با طراحی کلاسیک و بند چرمی. مناسب برای استفاده روزمره و مجالس رسمی.",
  //   image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=600&auto=format&fit=crop",
  // },
  // {
  //   id: "5",
  //   name: "هدفون بی سیم",
  //   price: 850000,
  //   description: "هدفون بی سیم با کیفیت صدای فوق العاده و باتری با دوام. مناسب برای استفاده روزانه و ورزش.",
  //   image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
  // },
  // {
  //   id: "6",
  //   name: "عینک آفتابی",
  //   price: 320000,
  //   description: "عینک آفتابی با فریم سبک و لنز UV400 برای محافظت کامل از چشم در برابر اشعه های مضر خورشید.",
  //   image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600&auto=format&fit=crop",
  // },
]

// Sample orders data
export const orders: Order[] = [
  {
    id: "ORD-1001",
    productId: "1",
    productName: "تیشرت مردانه طرح ساده",
    productImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
    quantity: 2,
    totalPrice: 360000,
    customerName: "علی محمدی",
    customerPhone: "09123456789",
    customerEmail: "ali@example.com",
    customerAddress: "تهران، خیابان ولیعصر، کوچه بهار، پلاک 12",
    status: "completed",
    date: "1402/12/10",
  },
  {
    id: "ORD-1002",
    productId: "3",
    productName: "کیف دستی چرم",
    productImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop",
    quantity: 1,
    totalPrice: 780000,
    customerName: "مریم احمدی",
    customerPhone: "09187654321",
    customerEmail: "maryam@example.com",
    customerAddress: "اصفهان، خیابان چهارباغ، کوچه گلستان، پلاک 5",
    status: "processing",
    date: "1402/12/15",
  },
  {
    id: "ORD-1003",
    productId: "5",
    productName: "هدفون بی سیم",
    productImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
    quantity: 1,
    totalPrice: 850000,
    customerName: "رضا کریمی",
    customerPhone: "09361234567",
    customerEmail: "reza@example.com",
    customerAddress: "شیراز، بلوار زند، کوچه ارم، پلاک 8",
    status: "pending",
    date: "1402/12/18",
  },
  {
    id: "ORD-1004",
    productId: "2",
    productName: "کفش ورزشی زنانه",
    productImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
    quantity: 1,
    totalPrice: 450000,
    customerName: "سارا حسینی",
    customerPhone: "09127654321",
    customerEmail: "sara@example.com",
    customerAddress: "مشهد، بلوار سجاد، کوچه نرگس، پلاک 15",
    status: "cancelled",
    date: "1402/12/05",
  },
  {
    id: "ORD-1005",
    productId: "4",
    productName: "ساعت مچی کلاسیک",
    productImage: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=600&auto=format&fit=crop",
    quantity: 1,
    totalPrice: 1250000,
    customerName: "محمد رضایی",
    customerPhone: "09331234567",
    customerEmail: "mohammad@example.com",
    customerAddress: "تبریز، خیابان امام، کوچه بهار، پلاک 20",
    status: "pending",
    date: "1402/12/20",
  },
]
