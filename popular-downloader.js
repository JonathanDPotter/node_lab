const fs = require("fs");
const path = require("path");
require("isomorphic-fetch");

(async () => {
  try {
    const response = await fetch("https://reddit.com/r/programmingHumor.json");
    const json = await response.json();

    json.data.children.forEach(async ({ data }) => {
      const { url, title } = data;
      if (url.match(/.jpg|.png|.gif/)) {
        const childResponse = await fetch(url);
        const arrayBuffer = await childResponse.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        fs.createWriteStream(
          path.join(__dirname, `./downloads${url.slice(url.lastIndexOf("/"))}`)
        ).write(buffer);
      }
    });
  } catch (error) {
    console.log(error);
  }
})();
