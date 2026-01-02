import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/contactdb')
.then(()=>console.log('MongoDB Connected'));

app.use('/api/contacts',contactRoutes);

app.listen(5000,()=>console.log('Server running on 5000'));
