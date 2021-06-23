const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { ensureAuthenticated } = require('../config/auth');
const User = require('../models/user');

router.get('/all', ensureAuthenticated, async (req, res)=> {
  try{const allUsers = await User.find();
    res.status(200).json(allUsers)}
    catch(error){
      res.status(404).json({message: error.message})
    }
})

router.post('/register', (req, res) =>{
  const { name, email, password, password2, role} = req.body
  console.log(req.body)
  let errors = [];
  // Check Required Fields
  if(!name || !email || !password || !password2) {
    errors.push({msg: 'Please fill in all fields'})
  }
  if(password !== password2){
    errors.push({msg: "Passwords do not match"});
  }
  if(password.length < 6){
    errors.push({msg: "Password must be at least 6 characters"})
  }
  if(errors.length > 0) {
    res.status(404).json({errors, name, email, password, password2});
  } else{
  
     User.findOne({email:email})
    .then(user => {
      if(user){
        //User Exists
      
        res.status(404).json("User already exists")
    } else {
      const newUser = new User({
        name, email, password, role
      }); 
      //Hash Password
       bcrypt.genSalt(10, (err, salt)=> bcrypt.hash(newUser.password, salt, (err, hash) =>{
        if(err) throw err;
        //Set password to hashed
        newUser.password = hash
        //Save user
        newUser.save()
        .then(e => {
          
          res.send('user saved')
        })
        .catch(err => console.log(err))
      }))
    }
  })
  }}
);
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    console.log(req.user)
    if(err) throw err;
    if(!user) res.status(404).send("No user exists")
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.status(200).send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  }) (req, res, next);
})
router.get("/user", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

//Logout Handle
router.get('/logout', (req, res) => {
  req.logout();
  res.send(req.user);
})

module.exports = router;