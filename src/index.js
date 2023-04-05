const dotenv = require("dotenv");
const express = require("express");

dotenv.config();
// console.log("DB_HOST:", process.env.DB_HOST);

const db = require("./db");
const routes = require("./routes");

async function main() {
  await db.connect();
  //   const note = await db.NoteModel.create({
  //     content: "This is my note's content",
  //     title: "This is my title",
  //   });
  //   console.log(note);

  const app = express();

  app.use(express.json());

  routes(app);

  app.listen(process.env.PORT, () => {
    console.log(`Server is runnind on port ${process.env.PORT}`);
  });
}

main();
