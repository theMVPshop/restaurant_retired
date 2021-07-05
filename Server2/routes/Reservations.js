const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservations')
// postRes = require('../controllers/PostRes.js')

//GET ALL RESERVATIONS
router.get('/', async (req,res)=>{
    const reservation = await Reservation.find()
  res.json(reservation)
});

//POST A NEW RESERVATION
router.post('/new', async (req,res) => {
    const newReservation = new Reservation(req.body)
    const saveReservation = await newReservation.save()
    res.json(saveReservation)
})

//GET A SPECIFIC RESERVATION BY EMAIL
router.get('/get/:email', async (req,res) => {
  const R = await Reservation.find({email: req.params.email});

  res.json(R)

})

//DELETE A RESERVATION
router.delete('/delete/:email', async (req,res) => {
  const result = await Reservation.find({email: req.params.email});
  res.json(result)
})

router.patch('/update/:email', async (req,res) => {
  const r = await Reservation.updateOne({email: req.pramas.email }, {$set: req.body})
  res.json(r)
})

module.exports = router;