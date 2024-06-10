require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const dataService = require('./services/dataService');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB:", err));

// Set view engine (assuming EJS)
app.set("view engine", "ejs");

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Home route
app.get('/', (req, res) => {
  res.send('this is home page');
});

// Schedule data upload task
cron.schedule('0 0,12 * * *', () => {
    console.log('Running data upload task...');
    dataService.uploadData();  
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
