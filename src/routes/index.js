const noteRoutes = require("./NoteRoutes");
const userRoutes = require("./AuthRoutes");

module.exports = (app) => {
  app.get("/status", (req, res, next) => {
    res.send("OK");
  });

  noteRoutes(app);
  userRoutes(app);
};
