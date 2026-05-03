import { useState } from "react";
import { Link } from "react-router";
import toast from "react-hot-toast";
import PasswordInput from "../components/PasswordInput";
import Spinner from "../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );
      const data = await response.json();
      
      if (!response.ok) {
        toast.error(data.message || "Login failed");
        return;
      }
      
      toast.success("Login successful!");
      setFormData(data);
      e.target.reset();
    } catch (error) {
      toast.error("Login failed: " + error.message);
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo/Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to your account</p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="doejohn"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-gray-700 border border-gray-600 rounded focus:ring-yellow-500 cursor-pointer"
                />
                <span className="ml-2 text-sm text-gray-300">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-yellow-500 hover:text-yellow-600 transition"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button with Spinner */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-700 disabled:cursor-not-allowed text-gray-900 font-bold py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-400">
                Don't have an account?
              </span>
            </div>
          </div>

          {/* Register Link */}
          <Link
            to="/register"
            className="w-full block text-center bg-gray-700 hover:bg-gray-600 text-yellow-500 font-semibold py-2 px-4 rounded-lg transition"
          >
            Create Account
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          © 2026 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Login;
