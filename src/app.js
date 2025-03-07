import cors from 'cors';
import express from 'express';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jobRoute from './routes/jobRoute.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/jobs', jobRoute);
export default app;

