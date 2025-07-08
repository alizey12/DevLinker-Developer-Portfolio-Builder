// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router';
import { Ghost } from 'lucide-react'; // Optional icon

const Page404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <div className="text-center max-w-md">
        <Ghost className="mx-auto text-emerald-400 mb-6" size={300} />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-md text-gray-300 mb-8">
          Maybe you mistyped the URL or the page has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;
