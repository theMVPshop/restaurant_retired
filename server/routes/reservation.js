const express = require('express');
const router = express.Router();

const Reservation = require('../models/reservation');

router.post('/add', (req, res) => {
  const { email, date, table, diners } = req.body;
  const newRes = new Reservation({
    email, date, table, diners
  });
  newRes.save()
  .then(resy => {
    res.send('reservation saved')

  })
  .catch(err => console.log(err))
})
router.get('/', (req, res)=> res.send('welcome'))

router.get('/all', (req, res)=> {
  res.send()
})

module.exports = router;