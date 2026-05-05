import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import authService from "../services/authService";
import tokenStore from "../services/tokenStore";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const accessToken = tokenStore.getAccessToken();

  // Redirect to home if already logged in
  if (accessToken) {
    return <Navigate to="/" />;
  }

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await authService.login({
        email: data.email,
        password: data.password,
      });
      console.log("Login successful:", response);

      toast.success("Login successful! Redirecting...");
      // Redirect to home
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || error.message || "Login failed";
      toast.error(errorMessage);
      console.error("Login failed:", error);
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                placeholder="user@domain.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full text-white px-4 py-2 bg-gray-700 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-600 focus:ring-yellow-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
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
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full text-white px-4 py-2 bg-gray-700 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-600 focus:ring-yellow-500"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
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
              disabled={isSubmitting}
              className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-700 disabled:cursor-not-allowed text-gray-900 font-bold py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Spinner />
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
