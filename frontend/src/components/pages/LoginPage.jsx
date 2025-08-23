import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/slices/authSlice";
import "./LoginPage.css"; // keep this for your custom styles like .login-card, .custom-input, etc.
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation()
  const { user, guestId,loading } = useSelector((state)=> state.auth)
  const { cart } = useSelector((state)=> state.cart)

  // Get redirect parameter and check if its checkout or something
  const redirect = new URLSearchParams(location.search).get("redirect") || "/"
  const isCheckoutRedirect = redirect.includes("checkout")

useEffect(() => {
  if (user) {
    if (cart?.products?.length > 0 && guestId) {
      dispatch(mergeCart({ guestId, user })).then(() => {
        navigate(isCheckoutRedirect ? "/checkout" : "/");
      });
    } else {
      navigate(isCheckoutRedirect ? "/checkout" : "/");
    }
  }
}, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch]);


  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login
    dispatch(loginUser({ email, password }))

  };

  return (
    <div className="login-container flex items-center justify-center min-h-screen">
      <div className="login-card p-8">
        <div className="text-center mb-6">
          <h2 className="welcome-title">Welcome Back</h2>
          <p className="subtitle">Sign in to access your gaming arsenal</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2"
            >
              Email Address
            </label>
            <div className="flex items-center bg-[#1f2937] text-white rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-lime-500">
              <span className="px-3 text-lg text-gray-400">@</span>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="bg-transparent flex-1 py-2 px-3 focus:outline-none text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-2"
            >
              Password
            </label>
            <div className="flex items-center bg-[#1f2937] text-white rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-lime-500">
              {/* Lock icon */}
              <span className="px-3 text-lg">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <circle cx="12" cy="16" r="1" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>

              {/* Input field */}
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="bg-transparent flex-1 py-2 px-3 focus:outline-none placeholder-gray-400 text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* Eye toggle */}
              <button
                type="button"
                className="px-3 text-lg focus:outline-none hover:text-lime-500 transition duration-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-400 gap-2">
              <input
                type="checkbox"
                className="custom-checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a href="#" className="forgot-password text-sm">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="signin-btn w-full mb-4 text-black text-base font-semibold"
          >
           {loading ?"loading...": "Sign In"}
          </button>

          {/* OR Divider */}
          <div className="text-center mb-4">
            <span className="or-text text-sm">Or continue with</span>
          </div>

          {/* Create Account Link */}
          <div className="text-center text-sm">
            <span className="signup-text">Don't have an account? </span>
            <Link to={`/register?redirect=${encodeURIComponent(redirect)}`} className="create-account">
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
