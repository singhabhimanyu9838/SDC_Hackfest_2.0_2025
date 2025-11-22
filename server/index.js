require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Ensure that other files like routes and services are required AFTER dotenv loads
const authRoutes = require('./routes/auth');
const teamsRoutes = require('./routes/teams');
// const contactRoutes = require('./routes/contact');
const registrationRoutes = require('./routes/registrations');


const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// --- Middlewares ---
// app.use(cors({
//     origin: process.env.CLIENT_URL,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// }));

app.use(cors({
  origin: [
    "https://sdc-hackfest-2-0-2025-fly8.onrender.com/",  // your frontend
    "http://localhost:5173"
  ],
  credentials: true,
})
);

app.use(express.json());

// --- Database Connection ---
mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB Atlas Connected!'))
    .catch(err => console.error('MongoDB connection error:', err));

// --- API Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/teams', teamsRoutes); 
// app.use('/api/contact', contactRoutes);
app.use('/api/registrations', registrationRoutes); 

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});