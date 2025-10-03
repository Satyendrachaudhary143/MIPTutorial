import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
    },
    isPublished: {
        type: Boolean,
        default: false
    },
  createdBy: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true });

export const Blog = mongoose.model('Blog', blogSchema);