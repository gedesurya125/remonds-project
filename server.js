const express = require('express');
const app = express();
const connectDB = require('./config/db');

//call connectDB
connectDB();
app.get('/', (req, res) => res.json('API is WORKS!!!!'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on PORT = ${PORT}`));