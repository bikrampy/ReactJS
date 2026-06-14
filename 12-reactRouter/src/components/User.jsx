import { useParams } from "react-router-dom";

export default function User() {
  const { name } = useParams();

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="bg-gray-800 border border-gray-700 rounded-xl px-8 py-6 shadow-lg">
        <p className="text-sm text-gray-400 mb-1 text-center">
          User Profile
        </p>
        <h1 className="text-3xl font-semibold text-orange-400 text-center">
          {name}
        </h1>
      </div>
    </div>
  );
}