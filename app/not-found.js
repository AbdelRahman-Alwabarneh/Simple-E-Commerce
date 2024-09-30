// pages/404.js

import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 px-4 py-2 bg-white text-blue-800 rounded hover:bg-gray-200">
        Go back to Home
      </Link>
    </div>
  );
};

export default Custom404;
