import express from 'express';
import { mongoose } from './models';
import logger from 'morgan';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger('dev'));

mongoose
  .connect(
    'mongodb+srv://gnasherx:pRjws0ExAhyizybF@cluster0.afdj7.mongodb.net/roomfully?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(
    () => console.log('✅ connection success'),
    (error) => console.log('‼️ connection error', error)
  );

app.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to bezkoder application.' });
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);

app.listen(8080, () => {
  console.log('🚀 app is running');
});
