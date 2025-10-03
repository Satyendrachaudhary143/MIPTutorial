import mongoose from 'mongoose';
import { Topic } from './Topic.model.js';

const subjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
     isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  topics: [Topic],
},{timestamps:true});

export const Subject = mongoose.model('Subject', subjectSchema);
