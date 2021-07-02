const express = require('express');
const bodyParser = require('body-parser') 
const cors = require('cors')
// const dotenv = require('dotenv')
const app = express();
require('dotenv').config()
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
})
);

const mongoose = require('mongoose'); //STEP 1

const db = process.env.MongoURI

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true } )
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err))
//MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//ROUTE TO GET THE HELLO FROM THE BACK END
// app.get('/', (req,res) => {
//   res.send("hello from the backend!!")
// })

//IMPORT OR USING THE RESERVATION ROUTES FROM THE ROUTES FOLDER
// const Reservationroute = require('./routes/Reservations')
// app.use('/reservations', Reservationroute);
app.use('/reservations', require('./routes/Reservations'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))