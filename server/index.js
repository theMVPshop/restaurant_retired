const express = require('express');
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const cors = require("cors");
const session = require('express-session');
const passport = require('passport');
const dotenv =  require('dotenv');
const app = express();

// Passport Config
require('./config/passport')(passport);
dotenv.config();

//DB Config
const db = process.env.MongoURI

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true } )
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err))

//EJS
// app.use(expressLayouts);
// app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({extended: false}));

app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
//Express Session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
//Passport middleware
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());

//Connect flash
// app.use(flash());

// })
//Routes
app.use('/users', require('./routes/users'))
app.use('/reservations', require('./routes/reservation'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))