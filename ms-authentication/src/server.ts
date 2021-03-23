import express from 'express';
import dotenv from 'dotenv';

import './database/connect';
import TokenRoute from './routes/token';

dotenv.config();

const PORT: string = process.env.PORT || '5000';

const app = express();

// Global Middlewares
app.use(express.json());

// Routes
app.use('/ms-authentication/token', TokenRoute);

app.listen(PORT, () =>
  console.log(`ms-authentication is running at port ${PORT}`),
);
