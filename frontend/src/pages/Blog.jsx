import { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { blogs } from '../lib/blogDataManager.js';

const categories = [
  "All",
  "Programming in C",
  "Web Development",
  "Fundamentals",
  "Real Life Applications"
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter(blog => blog.category === activeCategory);

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
        Explore Our Blogs
      </h1>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm sm:text-base rounded-full border transition ${
              activeCategory === category
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* No Blogs Message */}
      {filteredBlogs.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No blogs found in this category.
        </p>
      )}
    </div>
  );
};

export default Blog;