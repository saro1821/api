import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import AppRoutes from './src/routes/index.js';

dotenv.config();
const PORT = process.env.PORT;
const app = express();

// Use middleware
app.use(cors());
app.use(express.json());

// Specify the extended option for urlencoded
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use(AppRoutes);

// Start the server
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
