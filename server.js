const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/main');
const db = require('./db');

const app = express();
const PORT = 3000;

//static the static files (js, css, images)
app.use(express.static(path.join(__dirname,'public')));

//redirect to homepage
app.use('/',mainRoutes);

//Server is running
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})