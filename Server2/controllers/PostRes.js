 const postRes = async (req,res) => {
  const newReservation = new Reservation(req.body)
  const saveReservation = await newReservation.save()
  res.json(saveReservation)
}

module.exports = postRes