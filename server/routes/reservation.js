const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const Reservation = require('../models/reservation');

router.post('/add', ensureAuthenticated, (req, res) => {
  console.log(req.body)
  const { email, date, table, diners, notes } = req.body;
  const newRes = new Reservation({
    email, date, table, diners, notes
  });
  newRes.save()
  .then(resy => {
    res.send('reservation saved')

  })
  .catch(err => console.log(err))
})

router.get('/all', ensureAuthenticated, async (req, res)=> {
  try{const allRes = await Reservation.find();
  res.status(200).json(allRes)}
  catch(error){
    res.status(404).json({message: error.message})
  }
});
router.get('/user/:email', ensureAuthenticated, async (req, res)=>{
  const { email } = req.params;

  try {
    const resy = await Reservation.find({email: email});
    res.status(200).json(resy);
  } catch (error) {
    res.status(404).json({ message: error.message });
}
});

module.exports = router;