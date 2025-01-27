import { Link } from "react-router-dom";
import ErrorPage from "../assets/ErrorPage.webp";

export const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <img
          src={ErrorPage}
          alt="Error"
          className="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[500px] mb-6" // Responsive width
        />
        <h1 className="text-6xl font-extrabold text-red-500">404</h1>
        <p className="text-lg mt-4">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to ="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-md text-lg transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};
