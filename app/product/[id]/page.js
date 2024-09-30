// app/users/[id]/page.js
import Link from "next/link";
import Image from 'next/image';

export default function UserDetail({ params }) {
  const { id } = params;
  console.log(id);

  // بيانات ثابتة للمنتجات
  const products = [
    {
      id: 1,
      title: "Men's Shirt",
      description: "Premium cotton shirt available in multiple colors.",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: "$49.99",
      rating: "4.5/5",
    },
    {
      id: 2,
      title: "Women's Bag",
      description: "Elegant and trendy handbag made from genuine leather.",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: "$89.99",
      rating: "4.8/5",
    },
    {
      id: 3,
      title: "Wristwatch",
      description: "Luxury wristwatch with a leather strap.",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      price: "$199.99",
      rating: "4.7/5",
    },
    {
      id: 4,
      title: "Sunglasses",
      description: "Trendy sunglasses with UV protection.",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      price: "$29.99",
      rating: "4.6/5",
    },
    {
      id: 5,
      title: "Sneakers",
      description: "Comfortable sneakers for walking and running.",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      price: "$69.99",
      rating: "4.4/5",
    },
    {
      id: 6,
      title: "Leather Wallet",
      description: "Premium leather wallet with a simple design.",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      price: "$39.99",
      rating: "4.5/5",
    },
    // 3 additional products
    {
      id: 7,
      title: "Smartphone",
      description: "Latest model with advanced features.",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      price: "$999.99",
      rating: "4.9/5",
    },
    {
      id: 8,
      title: "Headphones",
      description: "Noise-cancelling over-ear headphones.",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      price: "$199.99",
      rating: "4.8/5",
    },
  ];

  const product = products[id -1] || { title: "Unknown", description: "N/A", image: "N/A", price: "N/A", rating: "N/A" };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">{product.title}</h1>
        <Image src={product.image} alt={product.title} width={400} height={400} className="rounded-lg mb-4" />
        <div className="space-y-4">
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Description: </span>{product.description}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Price: </span>{product.price}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Rating: </span>{product.rating}
          </p>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/product"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
