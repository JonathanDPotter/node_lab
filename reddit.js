const fs = require("fs");
const path = require("path");
require("isomorphic-fetch");

(async () => {
  try {
    const articles = [];
    const response = await fetch("https://reddit.com/r/programmingHumor.json");
    const json = await response.json();

    for (let article of json.data.children) {
      const { url, title, author } = article.data;
      articles.push({ url, title, author });
    }
    fs.writeFile(
      path.join(__dirname, "popular-articles.json"),
      JSON.stringify(articles),
      (error) =>
        error ? console.log(error) : console.log("Wrote popular-articles.json")
    );
  } catch (error) {
    console.log(error);
  }
})();
