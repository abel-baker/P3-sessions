const router = require("express").Router();

// GET '/api/instance/create'
router.get('/', (req, res) => {
  console.log("Reached /api/create/");

  req.session.save(() => {
    req.session.username = "Jimmy";
    req.session.loggedIn = true;

    res.json({ user: "Jimmy", message: "You are logged in now, Jim"});
  });
});

module.exports = router;