
import { Navigate } from "react-router";
import Navbar from "../components/Navbar";
import tokenStore from "../services/tokenStore";

const Home = () => {
  const accessToken = tokenStore.getAccessToken();
  const user = tokenStore.getUser();

  // Redirect to login if not authenticated
  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Welcome Back, <span className="text-yellow-500">{user?.username}</span>!
            </h1>
            <p className="text-gray-400 text-lg">You are successfully logged in</p>
          </div>

          {/* Profile Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Main Profile Card */}
            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-800 border border-gray-700 rounded-lg shadow-2xl p-8">
                <div className="flex items-center gap-6 mb-8">
                  {/* Avatar */}
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-bold text-white">
                      {user?.username?.charAt(0).toUpperCase()}
                    </span>
                  </div>

                  {/* Basic Info */}
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {user?.username}
                    </h2>
                    <p className="text-yellow-500 font-medium mb-1">
                      @{user?.username}
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-yellow-500 text-gray-900 rounded-full text-sm font-semibold">
                        {user?.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Account Details */}
                <div className="border-t border-gray-700 pt-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Account Information
                  </h3>

                  <div className="space-y-4">
                    {/* Email */}
                    <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition">
                      <span className="text-gray-400">Email Address</span>
                      <span className="text-white font-medium">{user?.email}</span>
                    </div>

                    {/* Role */}
                    <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition">
                      <span className="text-gray-400">Role</span>
                      <span className="text-white font-medium">
                        {user?.role === "ADMIN" ? (
                          <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-semibold">
                            Administrator
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                            User
                          </span>
                        )}
                      </span>
                    </div>

                    {/* Account Status */}
                    <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition">
                      <span className="text-gray-400">Account Status</span>
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-white font-medium">Active</span>
                      </span>
                    </div>

                    {/* Username */}
                    <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition">
                      <span className="text-gray-400">Username</span>
                      <span className="text-white font-medium">{user?.username}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="md:col-span-1">
              <div className="bg-gradient-to-br from-gray-800 to-gray-800 border border-gray-700 rounded-lg shadow-2xl p-8 h-full">
                <h3 className="text-xl font-bold text-white mb-6">Account Stats</h3>

                <div className="space-y-4">
                  {/* Status */}
                  <div className="p-4 bg-green-600/20 border border-green-600/50 rounded-lg">
                    <p className="text-gray-300 text-sm mb-1">Status</p>
                    <p className="text-2xl font-bold text-green-400">Online</p>
                  </div>

                  {/* Member Since */}
                  <div className="p-4 bg-blue-600/20 border border-blue-600/50 rounded-lg">
                    <p className="text-gray-300 text-sm mb-1">Member Since</p>
                    <p className="text-lg font-bold text-blue-400">
                      {new Date().toLocaleDateString()}
                    </p>
                  </div>

                  {/* Permissions */}
                  <div className="p-4 bg-yellow-600/20 border border-yellow-600/50 rounded-lg">
                    <p className="text-gray-300 text-sm mb-1">Permissions</p>
                    <p className="text-lg font-bold text-yellow-400">
                      {user?.role === "ADMIN" ? "Full Access" : "Standard"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0zM8 9a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="text-white font-semibold mb-1">Need Help?</h4>
                <p className="text-gray-300 text-sm">
                  Your account is secure and all your data is protected. If you have any questions, please contact our support team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
