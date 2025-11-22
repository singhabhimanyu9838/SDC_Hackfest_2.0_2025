require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Ensure that other files like routes and services are required AFTER dotenv loads
const authRoutes = require('./routes/auth');
const teamsRoutes = require('./routes/teams');
const registrationRoutes = require('./routes/registrations');


const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// --- Middlewares ---

// CORS Configuration: Ensures preflight OPTIONS request is handled
app.use(cors({
  // The frontend URL confirmed from your environment settings
  origin: [
    "https://sdc-hackfest-2-0-2025-fly8.onrender.com", 
    "http://localhost:5173"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})
);

app.use(express.json());

// --- Simple Health Check Route ---
// Hitting this route will confirm Express is running and can access the database
app.get('/health', async (req, res) => {
    try {
        // Check if Mongoose is connected (readyState 1 means connected)
        const isConnected = mongoose.connection.readyState === 1;
        const status = isConnected ? 'Connected' : 'Disconnected';
        res.json({ 
            service: 'Hackfest 2.0 Backend API',
            status: 'Running',
            database_status: status,
            version: '1.0'
        });
    } catch (e) {
        res.status(500).json({ status: 'error', message: e.message });
    }
});


// --- Database Connection ---
mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB Atlas Connected!'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });


// --- API Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/teams', teamsRoutes); 
app.use('/api/registrations', registrationRoutes); 

// Fallback for root path (fixes "Cannot GET /" by providing a message)
app.get('/', (req, res) => {
    res.send('API Server is running. Use /api/registrations for registration.');
});

app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
});