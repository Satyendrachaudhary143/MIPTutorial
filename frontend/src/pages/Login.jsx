import { useState } from "react";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans px-4">
      <div className="relative w-full max-w-[900px] min-h-[500px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700">
        {/* -------- Sign In Form -------- */}
        <div
          className={`absolute top-0 h-full w-full md:w-1/2 flex flex-col items-center justify-center px-8 sm:px-12 text-center transition-all duration-700 ${
            isSignUp
              ? "translate-x-full md:translate-x-full opacity-0 z-10"
              : "translate-x-0 opacity-100 z-20"
          }`}
        >
          <h1 className="text-3xl font-bold mb-4">Sign in</h1>
          <div className="flex space-x-4 mb-4">
            <button className="border rounded-full h-10 w-10 flex items-center justify-center">
              f
            </button>
            <button className="border rounded-full h-10 w-10 flex items-center justify-center">
              G
            </button>
            <button className="border rounded-full h-10 w-10 flex items-center justify-center">
              in
            </button>
          </div>
          <span className="text-sm mb-3">or use your account</span>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 bg-gray-100 rounded-md outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 bg-gray-100 rounded-md outline-none"
          />
          <a href="#" className="text-sm text-gray-500 mb-4">
            Forgot your password?
          </a>
          <button className="bg-red-500 text-white font-bold px-10 py-3 rounded-full uppercase text-sm hover:bg-red-600 transition">
            Sign In
          </button>
        </div>

        {/* -------- Sign Up Form -------- */}
        <div
          className={`absolute top-0 h-full w-full md:w-1/2 flex flex-col items-center justify-center px-8 sm:px-12 text-center transition-all duration-700 ${
            isSignUp
              ? "translate-x-0 opacity-100 z-20"
              : "-translate-x-full md:-translate-x-full opacity-0 z-10"
          }`}
          style={{ left: "50%" }}
        >
          <h1 className="text-3xl font-bold mb-4">Create Account</h1>
          <div className="flex space-x-4 mb-4">
            <button className="border rounded-full h-10 w-10 flex items-center justify-center">
              f
            </button>
            <button className="border rounded-full h-10 w-10 flex items-center justify-center">
              G
            </button>
            <button className="border rounded-full h-10 w-10 flex items-center justify-center">
              in
            </button>
          </div>
          <span className="text-sm mb-3">or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-3 bg-gray-100 rounded-md outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 bg-gray-100 rounded-md outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 bg-gray-100 rounded-md outline-none"
          />
          <button className="bg-red-500 text-white font-bold px-10 py-3 rounded-full uppercase text-sm hover:bg-red-600 transition">
            Sign Up
          </button>
        </div>

        {/* -------- Overlay (Desktop Only) -------- */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full hidden md:block overflow-hidden transition-transform duration-700 z-30 ${
            isSignUp ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div
            className={`bg-gradient-to-r from-red-500 to-pink-500 text-white relative -left-full h-full w-[200%] transform transition-transform duration-700 ${
              isSignUp ? "translate-x-1/2" : "translate-x-0"
            }`}
          >
            {/* Left Overlay */}
            <div className="absolute flex flex-col items-center justify-center px-8 text-center top-0 h-full w-1/2 transition duration-700">
              <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
              <p className="mb-6 text-sm max-w-xs">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="bg-transparent border-2 border-white px-8 py-2 rounded-full uppercase text-sm font-bold"
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </button>
            </div>

            {/* Right Overlay */}
            <div className="absolute right-0 flex flex-col items-center justify-center px-8 text-center top-0 h-full w-1/2 transition duration-700">
              <h1 className="text-3xl font-bold mb-4">Hello, Friend!</h1>
              <p className="mb-6 text-sm max-w-xs">
                Enter your personal details and start your journey with us
              </p>
              <button
                className="bg-transparent border-2 border-white px-8 py-2 rounded-full uppercase text-sm font-bold"
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* -------- Mobile Toggle (Visible only on small screens) -------- */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 md:hidden">
          <button
            className={`px-6 py-2 rounded-full text-sm font-bold ${
              !isSignUp
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-bold ${
              isSignUp
                ? "bg-pink-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
