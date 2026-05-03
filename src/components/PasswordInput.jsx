import { useState } from "react";

const PasswordInput = ({
  id = "password",
  name = "password",
  value,
  onChange,
  placeholder = "••••••••",
  required = false,
  label = "Password",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-300 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition pr-10"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition"
          aria-label="Toggle password visibility"
        >
          {showPassword ? (
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-14-14zM11 5a5 5 0 015 5 1 1 0 11-2 0 3 3 0 00-3-3 1 1 0 010-2zM3.071 7.071A7.002 7.002 0 0010 3c3.866 0 7.257 2.649 8.289 6.184a1 1 0 101.906-.672A9 9 0 1010 19a9.003 9.003 0 006.071-2.071A1 1 0 1015.536 15.536a7 7 0 11.535-8.465z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
