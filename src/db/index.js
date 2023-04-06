const mongoose = require("mongoose");
const NoteSchema = require("./NoteModel");
const UserSchema = require("./UserModel");
const SessionSchema = require("./SessionModel");

// module.exports  = mongoose // the default export

module.exports = {
  //name export the fonction that connect our db
  connect: () => {
    mongoose
      .connect(process.env.DB_HOST)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.log(err));
  },

  NoteModel: NoteSchema(mongoose),
  UserModel: UserSchema(mongoose),
  SessionModel: SessionSchema(mongoose),
};
