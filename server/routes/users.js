const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/user');

router.get('/all', async (req, res)=> {
  try{const allUsers = await User.find();
    res.status(200).json(allUsers)}
    catch(error){
      res.status(404).json({message: error.message})
    }
})

router.post('/register', async (req, res) =>{
  const {name, email, password, password2, role} = req.body
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
  
     await User.findOne({email:email})
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

module.exports = router;