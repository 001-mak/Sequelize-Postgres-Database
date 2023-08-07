const express = require('express');
const app = express();

app.use(express.json());

app.use('/api', require('./routes/userRoutes'))
app.use('/api', require('./routes/departmentRoutes'))
app.listen('5000', ()=>{
    console.log("Server running at port 5000")
})