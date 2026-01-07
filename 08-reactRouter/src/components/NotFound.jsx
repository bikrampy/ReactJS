import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-2">
        404
      </h1>
      <p className="text-gray-400 mb-4">
        Page not found
      </p>
      <Link
        to="/"
        className="text-orange-400 hover:underline"
      >
        Go back home
      </Link>
    </div>
  );
}