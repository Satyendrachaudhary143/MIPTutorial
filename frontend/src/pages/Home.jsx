import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const images = [
  "https://picsum.photos/id/1015/1600/500",
  "https://picsum.photos/id/1016/1600/500",
  "https://picsum.photos/id/1018/1600/500",
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* ✅ Carousel */}
      <div className="relative w-full overflow-hidden h-[400px]">
        <img
          src={images[current]}
          alt="slide"
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Welcome to My Tutorial Website
          </h1>
        </div>
      </div>

      {/* ✅ Welcome Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">📚 All Tutorials Are Free!</h2>
        <p className="text-lg text-gray-600">
          Learn programming and technology without spending a single rupee.
        </p>
        <button
          onClick={() => navigate("/tutorial")}
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
        >
          Start Learning
        </button>
      </section>

      {/* ✅ Features Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🔥 Easy to Understand</h3>
            <p>Step-by-step tutorials explained in simple words.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">💻 Wide Range</h3>
            <p>Covers Web Development, C, Python, Data Science & more.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🌍 Free Forever</h3>
            <p>All tutorials are completely free and regularly updated.</p>
          </div>
        </div>
      </section>


      {/* ✅ About Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        {/* <h2 className="text-3xl font-bold mb-4">ℹ️ About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          This website is dedicated to providing <b>free tutorials</b> for
          students, developers, and tech enthusiasts. We believe in{" "}
          <b>free education</b> for everyone who wants to learn programming and
          technology.
        </p> */}
        <About/>
      </section>
      {/* ✅ Contact Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <Contact/>
      </section>

   
    </div>
  );
}
