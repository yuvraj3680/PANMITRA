require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// Importing routes
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const newPANRoutes = require('./routes/NewPANroutes');
const minorPanRoutes = require('./routes/MinorPanRoutes');
const nsdlPanRoutes = require('./routes/NSDLRoutes');
const nsdlEsignRoutes = require('./routes/NSDL-E-SIGNRoutes');
const findPanRoutes = require('./routes/FindPanRoutes');
const walletRoutes = require('./routes/WallateRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// JWT Secret Key
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_secret_key';

// Middleware to verify JWT token and manage user session
// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) {
//     return res.status(401).json({ error: 'Unauthorized: Token not provided' });
//   }

//   // Verify JWT token
//   jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
//     if (err) {
//       console.error(err);
//       return res.status(401).json({ error: 'Unauthorized: Invalid token' });
//     }
//     req.user = decoded;
//     next();
//   });
// };

// Routes with session management and authentication
app.use('/api/users', userRoutes); // User routes
app.use('/admin', adminRoutes); // Admin routes (protected)
app.use('/newpan',  newPANRoutes); // New PAN application routes (protected)
app.use('/minorpan',  minorPanRoutes); // Minor PAN application routes (protected)
app.use('/nsdl-e-kyc',  nsdlPanRoutes); // NSDL e-KYC routes (protected)
app.use('/nsdl-e-sign',  nsdlEsignRoutes); // NSDL e-Sign routes (protected)
app.use('/findpan', findPanRoutes); // Find PAN routes (protected)
app.use('/wallet', walletRoutes); // Wallet routes (protected)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log("Server started successfully");
