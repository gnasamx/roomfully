import express from 'express';
import { getUserById } from '../controllers/user.controller';
import { verifyToken } from '../middlewares';

const router = express.Router();

router.get('/:userId', verifyToken, getUserById);

export default router;
