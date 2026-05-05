
// Use fixed key names for localStorage
const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const USER_KEY = "user";

const tokenStore = {
      getAccessToken: () => localStorage.getItem(ACCESS_TOKEN_KEY),
      getRefreshToken: () => localStorage.getItem(REFRESH_TOKEN_KEY),
      getUser: () => {
            try {
                  const rawData = localStorage.getItem(USER_KEY);
                  return rawData ? JSON.parse(rawData) : null;
            } catch (error) {
                  console.error("Error parsing user data from localStorage:", error);
                  return null;
            }
      },
      setTokens: (responseData) => {
            try {
                  // Handle both nested (data.data) and flat responses
                  const data = responseData.data || responseData;
                  
                  // Extract tokens and user from API response
                  const accessToken = data.accessToken;
                  const refreshToken = data.refreshToken;
                  const user = data.user;
                  
                  // console.log("Setting tokens:", { accessToken, refreshToken, user });
                  
                  if (accessToken) {
                        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
                  }
                  if (refreshToken) {
                        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
                  }
                  if (user) {
                        localStorage.setItem(USER_KEY, JSON.stringify(user));
                  }
            } catch (error) {
                  console.error("Error storing tokens:", error);
            }
      },
      clearTokens: () => {
            localStorage.removeItem(ACCESS_TOKEN_KEY);
            localStorage.removeItem(REFRESH_TOKEN_KEY);
            localStorage.removeItem(USER_KEY);
      }
}

export default tokenStore;