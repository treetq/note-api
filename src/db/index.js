const mongoose = require("mongoose");

// module.exports  = mongoose // the default export

module.exports = {
  //name export the fonction that connect our db
  connect: () => {
    mongoose
      .connect(process.env.DB_HOST)
      .then(() => console.log("Connected to the BD"))
      .catch((err) => console.log(err));
  },
};
