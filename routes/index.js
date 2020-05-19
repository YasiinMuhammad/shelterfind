const router = require("express").Router();
const loginRoutes = require("./login-signup");

router.get('/', function (req, res) {
  res.json({
      status: 'API Its Working'
  });
});
router.use("/v1", loginRoutes);

module.exports = router;