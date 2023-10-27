const fs = require("fs");
const path = require("path");

const chirps = [
  { author: "Jonathan", chirp: "This is my chirp." },
  {
    author: "dril",
    chirp:
      "'im not owned! im not owned! i continue to insist as i slowly shrink and transform into a corn cob",
  },
  { author: "Duke", chirp: "Bark, Bark Bark" },
  {
    author: "Prince",
    chirp: "Now, this is what it sounds like when doves cry!",
  },
  { author: "Anissa", chirp: "What do you want for supper?" },
];

fs.writeFile(
  path.join(__dirname, "chirps.json"),
  JSON.stringify(chirps),
  (error) => {
    if (error) return console.log(error);
    return console.log("Wrote chirps to file");
  }
);

fs.readFile(path.join(__dirname, "chirps.json"), (error, data) => {
  if (error) return console.log(error);
  return console.log(JSON.parse(data));
});
