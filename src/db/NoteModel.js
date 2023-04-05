//const mongoose = require('mongoose');

module.exports = (mongoose) => {
  const NoteSchema = new mongoose.Schema(
    {
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
  return mongoose.model("Note", NoteSchema);
};
