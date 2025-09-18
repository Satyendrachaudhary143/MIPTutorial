// src/pages/BlogDetail.jsx
import { useParams } from 'react-router-dom';
import { blogs } from '../lib/blogDataManager.js';

const BlogDetail = () => {
    
    const { id } = useParams();
    const blog = blogs.find(b => b.id ==id);
    
    if (!blog) return <div className="p-4 min-h-screen">Blog not found.</div>;
    
    const dateOnly = new Date(blog.createdAt).toISOString().split('T')[0];
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 min-h-[80vh]">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-2">By {blog.createdBy} on {dateOnly}</p>
      <div className="text-gray-800 leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogDetail;