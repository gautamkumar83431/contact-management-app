import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';
import dotenv from 'dotenv';

dotenv.config(); // load .env

const app = express();
app.use(cors());
app.use(express.json());

// Use PORT from .env or fallback to 5000
const PORT = process.env.PORT || 5000;

// MongoDB connection using MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/contacts', contactRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
