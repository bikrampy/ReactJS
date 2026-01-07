import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex gap-6 p-4 border-b border-white/20">
        <Link to="/login" className="hover:text-blue-400">
          Login
        </Link>
        <Link to="/profile" className="hover:text-blue-400">
          Profile
        </Link>
      </nav>

      {/* Route content renders here */}
      <Outlet />
    </div>
  );
}