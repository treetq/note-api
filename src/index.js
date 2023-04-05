const dotenv = require("dotenv");

dotenv.config();
// console.log("DB_HOST:", process.env.DB_HOST);

const db = require("./db");

async function main() {
  await db.connect();
  //   const note = await db.NoteModel.create({
  //     content: "This is my note's content",
  //     title: "This is my title",
  //   });
  //   console.log(note);
}

main();
