const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

dotenv.config();

const app = express();
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

const db = process.env.MongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true } )
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err))

app.use(passport.initialize());
app.use(passport.session());

app.use('/reservation', require('./routes/reservation'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))