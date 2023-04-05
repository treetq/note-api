const mongoose = require("mongoose");
const NoteSchema = require("./NoteModel");

// module.exports  = mongoose // the default export

module.exports = {
  //name export the fonction that connect our db
  connect: () => {
    mongoose
      .connect(process.env.DB_HOST)
      .then(() => console.log("Connected to the BD"))
      .catch((err) => console.log(err));
  },

  NoteModel: NoteSchema(mongoose),
};
