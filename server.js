const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/main');
const db = require('./db');
const menuRoutes = require('./routes/menu');

const app = express();
const PORT = 3000;

//static the static files (js, css, images)
app.use(express.static(path.join(__dirname,'public')));

//redirect to homepage
app.use('/',mainRoutes);

app.use('/menu', menuRoutes);

//Server is running
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})