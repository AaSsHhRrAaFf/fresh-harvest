// src/components/ui/LoginModal.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { XMarkIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useLoginMutation } from "@/services/authApi";

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const [login, { isloading, error }] = useLoginMutation();
  // Near the top of your LoginModal component
  useEffect(() => {
    if (isOpen) {
      // Set focus on first input when modal opens
      const timer = setTimeout(() => {
        document.getElementById("email")?.focus();
      }, 50);

      // Handle ESC key press
      const handleEsc = (e) => {
        if (e.key === "Escape") onClose();
      };

      window.addEventListener("keydown", handleEsc);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would integrate with your authentication API
    // Using the endpoint: http://api-fresh-harvest.code-commando.com/api/v1/auth/login

    console.log("Login attempt with:", { email, password, rememberMe });

    try {
      const result = await login({ email, password }).unwrap();
      if (result.success) {
        dispatch(setCredentials({ user: result.user, token: result.token }));
        if (rememberMe) {
          localStorage.setItem("token", result.token);
        }
        onClose();
        // Handle successful login, store token, etc.
      }
    } catch (error) {
      dispatch(setError(error.data?.message || "Login failed"));
    }
    if (!isOpen) return null;

    // Example of how you would handle this with Redux RTK Query
    // dispatch(loginUser({ email, password }))
    //   .unwrap()
    //   .then((response) => {
    //     if (response.success) {
    //       onClose();
    //       // Handle successful login, store token, etc.
    //     }
    //   })
    //   .catch((error) => {
    //     // Handle error
    //   });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-[450px] bg-white rounded-lg shadow-md p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-7 right-7 text-gray-800 text-xl"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-8 mt-4">
          Login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[52px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-5">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[52px] px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4 text-orange-500 border-orange-500 rounded focus:ring-orange-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-gray-700 hover:underline">
              Forgot Password
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-[52px] bg-orange-500 text-white rounded-lg font-medium text-base hover:bg-orange-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="px-3 text-sm text-gray-500">Or Sign in with</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>

        {/* Social Login */}
        <div className="flex gap-4 mb-6">
          <button className="flex-1 flex items-center justify-center h-[48px] border border-gray-200 rounded-lg">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              {/* Google icon SVG */}
              <path
                fill="#EA4335"
                d="M12 5c1.6168 0 3.1013.57477 4.2466 1.5196l3.1973-3.1976C17.4625 1.4284 14.884.42883 12 .42883c-4.4328 0-8.26685 2.6082-10.0246 6.37522l3.71636 2.87508C6.66142 6.69758 9.11925 5 12 5z"
              />
              <path
                fill="#4285F4"
                d="M23.49 12.275c0-.8071-.073-1.5837-.2102-2.3325H12v4.5069h6.4757c-.2776 1.4976-1.1332 2.7675-2.4097 3.6207l3.6767 2.8457c2.1449-1.9796 3.3828-4.8988 3.3828-8.6408z"
              />
              <path
                fill="#FBBC05"
                d="M5.69244 14.3189c-.29383-.8669-.4622-1.7914-.4622-2.7467 0-.9553.16837-1.8798.4622-2.7467L2.01324 5.95733C.73123 7.76974.0708 9.83198.0708 12.0001c0 2.1681.66043 4.2303 1.94244 6.0427l3.6792-2.8472z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.1032 0 5.7024-1.0244 7.6008-2.7787l-3.6767-2.8457c-1.0182.6811-2.3279 1.0868-3.9241 1.0868-2.8807 0-5.3386-1.9453-6.21155-4.5665l-3.71635 2.87c1.75237 3.7722 5.59063 6.3841 9.9279 6.3841z"
              />
            </svg>
            Google
          </button>
          <button className="flex-1 flex items-center justify-center h-[48px] border border-gray-200 rounded-lg">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#1877F2">
              {/* Facebook icon SVG */}
              <path d="M24 12.0733C24 5.4053 18.6281 0 12 0C5.37188 0 0 5.4053 0 12.0733C0 18.0995 4.38825 23.0943 10.125 24V15.5633H7.07812V12.0733H10.125V9.41343C10.125 6.38755 11.9156 4.71615 14.6578 4.71615C15.9703 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8297C14.34 7.92313 13.875 8.8534 13.875 9.80722V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6117 23.0943 24 18.0995 24 12.0733Z" />
            </svg>
            Facebook
          </button>
        </div>

        {/* Sign Up Prompt */}
        <p className="text-center text-sm text-gray-700">
          Don't have an account?
          <a href="#" className="text-orange-500 ml-1 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
