import express from 'express';
import { registerUser ,loginUser, adminLogin } from '../controllers/userController.js';

const UserRouter = express.Router();

UserRouter.post('/login', loginUser);
UserRouter.post('/register', registerUser);
UserRouter.post('/admin', adminLogin);

export default UserRouter;