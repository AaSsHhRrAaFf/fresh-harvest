"use client";
import React, { useState } from "react";
import { useLoginMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/feature/authSlice";

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ email, password }).unwrap();
      console.log("User logged in:", userData);

      // Update Redux store with user data
      dispatch(
        setCredentials({
          user: userData.user,
          token: userData.token,
        })
      );

      // Show success toast (this will now be handled in Navbar)
      setToast({
        message: "Login successful!.",
        type: "success",
      });
      // Close the modal
      onClose();
    } catch (err) {
      console.error("Failed to login:", err);
      setToast({
        message:
          err.data?.message || "Login failed. Please check your credentials.",
        type: "error",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[420px] max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#23233B] text-3xl">Login</h2>
          <button
            onClick={onClose}
            className="text-[#23233B] hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#23233B] mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 border border-[#E9E9E9] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#23233B] mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border border-[#E9E9E9] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 border-[#FF6C0E] rounded-sm text-orange-500 focus:ring-orange-500"
              />
              <span className="text-sm text-[#23233B]">Remember me</span>
            </label>
            <a href="#" className="text-sm text-[#23233B] hover:underline">
              Forgot Password
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#FF6C0E] text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors disabled:bg-orange-400"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <div className="flex items-center mb-4">
            <div className="flex-grow border-t border-[#E9E9E9]" />
            <span className="mx-4 text-[#8E9299] text-sm">Or Sign in with</span>
            <div className="flex-grow border-t border-[#E9E9E9]" />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              className="flex items-center justify-center bg-white border border-[#E9E9E9] rounded-md py-2 px-4 w-1/2"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Google</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center bg-white border border-[#E9E9E9] rounded-md py-2 px-4 w-1/2"
            >
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1877F2"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error.data?.message || "An error occurred"}
            </p>
          )}

          <div className="text-center mt-6">
            <p className="text-[#555555]">
              Don't have an account?
              <button
                type="button"
                onClick={() => {
                  onSwitchToRegister();
                  onClose();
                }}
                className="text-[#FF6C0E] font-medium hover:underline ml-1"
              >
                Sign up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

