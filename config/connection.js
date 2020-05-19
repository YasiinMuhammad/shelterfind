const mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);

module.exports = function (databaseURL) {
  mongoose.connect(databaseURL, { useNewUrlParser: true, useCreateIndex: true }, () => console.log("connection to mongodb"));
  mongoose.Promise = Promise;
}
