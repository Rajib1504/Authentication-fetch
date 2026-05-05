const PasswordInput = ({
  id = "password",
  name = "password",
  value = "",
  onChange = () => {},
  placeholder = "••••••••",
  required = false,
  label = "Password",
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-300 mb-2"
      >
        {label}
      </label>
      <div>
        <input
          type="password"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
        />
      </div>
    </div>
  );
};

export default PasswordInput;
