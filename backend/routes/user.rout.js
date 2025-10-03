import express from 'express'
import { sanitizeRequest } from '../middleware/Sanitizer.middleware.js';
import { login, logout, registerUser } from '../controllers/User.Controller.js';
import { validateWithZod } from '../middleware/validateWithZod.js';
import { loginSchema, userSchema } from '../authSchema/userauth.js';


const router = express.Router();
router.route('/register').post(sanitizeRequest,validateWithZod(userSchema),registerUser);
router.route('/login').post(sanitizeRequest, validateWithZod(loginSchema), login);
router.route('/logout').get(logout);

export default router;