import Image from 'next/image';
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Fjallraven",
    description: "Premium cotton shirt available in multiple colors.",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Women's Bag",
    description: "Elegant and trendy handbag made from genuine leather.",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "Wristwatch",
    description: "Luxury wristwatch with a leather strap.",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 4,
    title: "Sunglasses",
    description: "Trendy sunglasses with UV protection.",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    id: 5,
    title: "Sneakers",
    description: "Comfortable sneakers for walking and running.",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 6,
    title: "Leather Wallet",
    description: "Premium leather wallet with a simple design.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  },
  // 3 additional products
  {
    id: 7,
    title: "Smartphone",
    description: "Latest model with advanced features.",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 8,
    title: "Headphones",
    description: "Noise-cancelling over-ear headphones.",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  },

];

export default function Products() {
    return (
        <div className="bg-gray-100 min-h-screen p-8 text-gray-700">
          <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Link href={`/product/${product.id}`}>

                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-64"
                />
                </Link>

                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                  <p className="text-gray-700">{product.description}</p>
                  <button
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}
