import Link from "next/link";
import Image from "next/image"; 
export default function Home() {
  // Products as a constant object
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
    // {
    //   id: 4,
    //   title: "Sunglasses",
    //   description: "Trendy sunglasses with UV protection.",
    //   image: "/path-to-sunglasses-image.jpg",
    // },
    // {
    //   id: 5,
    //   title: "Sneakers",
    //   description: "Comfortable sneakers for walking and running.",
    //   image: "/path-to-sneakers-image.jpg",
    // },
    // {
    //   id: 6,
    //   title: "Leather Wallet",
    //   description: "Premium leather wallet with a simple design.",
    //   image: "/path-to-wallet-image.jpg",
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="text-center py-10">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to Our Global Online Store!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover premium products at unbeatable prices.
        </p>
        <nav className="space-x-6">
          <Link href="/product" className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full shadow-md transition duration-300 text-lg">
              Shop Now
          </Link>
          <Link href="/about" className="text-white bg-gray-500 hover:bg-gray-600 px-6 py-3 rounded-full shadow-md transition duration-300 text-lg">
              About Us
          </Link>
        </nav>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-2xl text-gray-600 font-semibold">{product.title}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <Link href={`/product/${product.id}`}className="text-blue-500 hover:text-blue-700 mt-4 block">
                  View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
