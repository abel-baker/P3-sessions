const router = require("express").Router();

const instanceRoutes = require("./instance-routes");

router.use('/instance', instanceRoutes);

module.exports = router;