const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const routes = require('./routes/Routes')


mongoose.connect(process.env.uri).then(()=>{
    console.log('connected sucessfully')
}).catch(()=>{
    console.log('error connecting')
})
app.use(cors())
app.use(express.json())
app.listen(5000);
app.use('/user',routes)
