const express = require('express');
// const reservation = require('./routes/reservation')
const app = express();
const bodyParser = require('body-parser') 
const cors = require('cors')
// const dotenv = require('dotenv')
require('dotenv').config()
app.use(cors)

const mongoose = require('mongoose'); //STEP 1

const db = process.env.MongoURI

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true } )
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err))

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/reservations', require('./routes/reservation'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))