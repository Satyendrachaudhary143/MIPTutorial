import mongoose from 'mongoose';
import { Content } from './Content.model.js';

const topicSchema = new mongoose.Schema({
    title: { type: String, required: true },
     isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  contents: [Content],
}, {timestamps:true});

export const Topic = mongoose.model("Topic", topicSchema);