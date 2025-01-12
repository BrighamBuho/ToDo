import React from "react";
import { Link } from "react-router-dom";

const NotFoundScreen: React.FC = () => {
  return (
    <div className="min-w-screen min-h-screen  bg-red flex flex-col items-center justify-center ">
      {/* Ahora ocupa todo el ancho */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl mb-8">Oops! The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition-opacity"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundScreen;
