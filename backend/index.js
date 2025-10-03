// server/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { connectDB } from './config/DBConnection.js';
import userRoute from './routes/user.rout.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware stack
app.use(helmet()); // Secure HTTP headers
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || '*', // Set specific origin in production
  credentials: true,
}));
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser(process.env.COOKIE_SECRET)); // Parse cookies
app.use(compression()); // Gzip compression
app.use(morgan('dev')); // HTTP request logging

// Health check route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running ✅' });
});

// api routes
app.use('/api/v1/users', userRoute);


// Global error handler (optional)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Something went wrong!' });
// });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});