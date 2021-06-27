import { signup, signin, refreshToken } from '../controllers/auth.controller';
import express from 'express';
import { checkDuplicateEmail } from '../middlewares/';

const router = express.Router();

router.post('/signup', checkDuplicateEmail, signup);
router.post('/signin', signin);
router.post('/refreshtoken', refreshToken);

export default router;
