import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const formattedDate = new Date(blog.createdAt).toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition duration-300">
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
          {blog.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mb-1">
          By {blog.createdBy} on {formattedDate}
        </p>
        <p className="text-gray-700 text-sm sm:text-base mb-4 line-clamp-3">
          {blog.content}
        </p>
      </div>
      <Link
        to={`/blog/${blog.id}`}
        className="text-sm text-blue-600 hover:underline font-medium mt-auto"
      >
        Read More →
      </Link>
    </div>
  );
};

export default BlogCard;