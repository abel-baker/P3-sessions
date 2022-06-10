const router = require('express').Router();

router.get('/', (req, res) => {
  if (!req.session.loggedIn) {
    res.render('nosession', {
      
    });
  } else {
    res.render('session', {
      greeting: 'Gday',
      loggedIn: req.session.loggedIn
    });
  }
})

module.exports = router;