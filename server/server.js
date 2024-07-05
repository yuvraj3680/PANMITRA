require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const UserRouter = require("./routes/userRoutes");
const AdminRoute = require("./routes/adminRoutes");
const NewPanRoute = require("./routes/NewPANroutes");
const MinorPanRoute = require("./routes/MinorPanRoutes");
const NSDLPANRoutes = require ('./routes/NSDLRoutes');
const NSDLesignRoutes = require("./routes/NSDL-E-SIGNRoutes");
const FindPanRoutes = require("./routes/FIndPanRoutes");
const WallateRoutes = require('./routes/WallateRoutes')

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/user', UserRouter);
app.use('/admin', AdminRoute);
app.use('/newpan', NewPanRoute);
app.use('/minorpan', MinorPanRoute);
app.use('/nsdl-e-kyc',NSDLPANRoutes);
app.use('/nsdl-e-sign',NSDLesignRoutes)
app.use('/findpan', FindPanRoutes);
app.use('/wallate',WallateRoutes);



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

console.log("Server started successfully");
