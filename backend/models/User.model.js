import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    match: /^[6-9]\d{9}$/ // Indian mobile format
  },
  dob: {
    type: Date,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'writer', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);