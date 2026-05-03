import { useAuth } from "../context/AuthContext";
import { Link } from "react-router";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-yellow-500 hover:text-yellow-600 transition"
          >
            AuthApp
          </Link>

          {/* Right section */}
          <div className="flex items-center gap-4">
            {user && (
              <>
                <div className="hidden sm:block">
                  <p className="text-gray-300 text-sm">
                    Welcome, <span className="font-semibold text-yellow-500">{user.username}</span>
                  </p>
                </div>
                <button
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
