import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
    content: { type: String, required: true },
   isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {timestamps:true });

export const Content = mongoose.model('Content', contentSchema);