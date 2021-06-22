module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if(req.isAuthenticated()){
      return next();
    }
    
    res.status(404).send("Please login to view that resource")
  }
}