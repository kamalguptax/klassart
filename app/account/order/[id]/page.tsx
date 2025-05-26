// app/order/[id]/page.tsx

import { Order } from "@/app/account/order/OrderCard";

type PageProps = {
  params: {
    id: string;
  };
};

// Dummy data (replace with actual data fetch if needed)
const dummyOrders: Order[] = [
  {
    id: "8596-854621-8546",
    title: "8 Terracotta Warli Handpainted Pots With Sheesham Wooden Frame Wall Hanging",
    size: "50 x 40 inches",
    total: 1105,
    date: "Apr 1, 2025",
    status: "Delivered",
    image: "/assets/images/order-img.png",
  },
  {
    id: "1234-5678-9012",
    title: "Handmade Wooden Elephant Statue",
    size: "10 x 8 inches",
    total: 499,
    date: "Apr 5, 2025",
    status: "Cancelled",
    image: "/assets/images/order-img.png",
  },
];

export default function OrderDetailPage({ params }: PageProps) {
  const order = dummyOrders.find((o) => o.id === params.id);

  if (!order) return <p className="p-10 text-red-500">Order not found</p>;

  return (
    // <main className="max-w-4xl mx-auto p-6">
    //   <h1 className="text-2xl font-bold mb-4">Order Details</h1>

    //   <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
    //     <p><strong>Order ID:</strong> {order.id}</p>
    //     <p><strong>Product:</strong> {order.title}</p>
    //     <p><strong>Size:</strong> {order.size}</p>
    //     <p><strong>Total:</strong> ₹{order.total}</p>
    //     <p><strong>Status:</strong> {order.status}</p>
    //     <p><strong>Date:</strong> {order.date}</p>
    //     <img
    //       src={order.image}
    //       alt={order.title}
    //       className="w-60 h-auto rounded-lg mt-4"
    //     />
    //   </div>
    // </main>


<div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6 border text-sm text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 text-sm">
        <span className="text-gray-600 font-medium">Order ID - #8596-854621-8546</span>
        <span className="text-gray-700 font-semibold">Grand Total - ₹1105.00</span>
      </div>

      {/* Product */}
      <div className="flex flex-col md:flex-row justify-between gap-6 border-b pb-6">
        {/* Product Image */}
         <img
          src={order.image}
          alt={order.title}
          className="w-60 h-auto rounded-lg mt-4"
        />

        {/* Product Details */}
        <div className="flex-1 space-y-2">
          <h2 className="text-base font-semibold">
            8 Terracotta Warli Handpainted Pots With Sheesham Wooden Frame Wall Hanging
          </h2>
          <p>
            <span className="text-gray-500">Size :</span>{' '}
            <span className="font-medium">50 x 40 inches</span>
          </p>
        </div>

        {/* Product Price */}
        <div className="text-green-600 text-xl font-bold whitespace-nowrap">₹1,105.00</div>
      </div>

      {/* Shipping and Summary */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Shipping Address */}
        <div className="flex-1 space-y-2">
          <h3 className="font-semibold text-base">Shipping Address</h3>
          <p>Ankit Sharma</p>
          <p>+91 7042094710</p>
          <p>
            212, 2nd Floor, Aggarwal Cyber Plaza, Netaji Subash Place, New Delhi-110034
          </p>

          <div className="mt-4">
            <h3 className="font-semibold">Payment Method</h3>
            <div className="flex items-center gap-2 mt-1">
              <img
                src="/assets/images/icon/logo-mastercard.png"
                alt="MasterCard"
                width={24}
                height={24}
              />
              <span>xxxx xxxx xxxx 8596</span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-green-600 font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Delivered on Apr 1, 2025
          </div>
        </div>

        {/* Order Summary */}
        <div className="flex-1">
          <h3 className="font-semibold text-base mb-2">Order Summary</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Item(s) Subtotal</span>
              <span>₹9790.00</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span>₹00.00</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>-₹00.00</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t mt-2">
              <span>Grand Total</span>
              <span>₹9790.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
