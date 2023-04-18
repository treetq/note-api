//const mongoose = require('mongoose');

module.exports = (mongoose) => {
  const NoteSchema = new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      title: {
        type: String,
        max: 50,
        require: true,
      },
      content: {
        type: String,
        require: true,
      },
    },
    {
      timestamps: true,
    }
  );

  NoteSchema.methods.toJSON = function () {
    const note = this.toObject();

    note.id = note._id;
    delete note.__v;
    delete note._id;
    return note;
  };

  return mongoose.model("Note", NoteSchema);
};
