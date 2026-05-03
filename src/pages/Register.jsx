import { useState } from "react";
import { Link, Navigate } from "react-router";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import PasswordInput from "../components/PasswordInput";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [formData, setFormData] = useState();
  console.log(formData);

  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  // Redirect to home if already logged in
  if (token) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = {
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value,
        role: event.target.role.value,
      };
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );
      const data = await response.json();
      
      if (!response.ok) {
        toast.error(data.message || "Registration failed");
        return;
      }
      
      toast.success("Registration successful! Redirecting to login...");
      event.target.reset();
      // Redirect to login after 2 seconds
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      toast.error("Registration failed: " + error.message);
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo/Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-gray-400">Join us today</p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="user@domain.com"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
              />
            </div>

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
                required
                placeholder="doejohn"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Password Field */}
            <PasswordInput
              id="password"
              name="password"
              required
            />

            {/* Role Field */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>

            {/* Submit Button with Spinner */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-700 disabled:cursor-not-allowed text-gray-900 font-bold py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Spinner />
                  Registering...
                </>
              ) : (
                "Register"
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
                Already have an account?
              </span>
            </div>
          </div>

          {/* Login Link */}
          <Link
            to="/login"
            className="w-full block text-center bg-gray-700 hover:bg-gray-600 text-yellow-500 font-semibold py-2 px-4 rounded-lg transition"
          >
            Sign In
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          By registering, you agree to our Terms of Service
        </p>
      </div>
    </div>
  );
};

export default Register;
