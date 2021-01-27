const express = require('express');
const app = express();
const connectDB = require('./config/db');

//call connectDB
connectDB();

//test app.get
app.get('/', (req, res) => res.json('API is WORKS!!!!'));

//test app.use
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on PORT = ${PORT}`));