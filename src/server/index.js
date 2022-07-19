var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

// Environment variable setup
const dotenv = require("dotenv");
dotenv.config();

// External API key and url
const nlpApiKey = process.env.API_KEY;
const nlpApiUrl = "https://api.meaningcloud.com/sentiment-2.1";

const request = require("request");

const port = 8080;
const app = express();

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.get("/nlp-sentiment", async (req, res) => {
  const url = new URL(nlpApiUrl);
  url.searchParams.set("key", nlpApiKey);
  url.searchParams.set("lang", "en");
  url.searchParams.set("txt", req.query.txt);

  console.log(">>>>>>>>> url.href:", url.href);
  request(url.href, (error, response, body) => {
    // res.send('ok')
    res.status(200).send(body);
  });

  // const analyzedResult = await request.get(url.href);
  // analyzedResult.
  // // console.log('analyzedResult:', await analyzedResult.)
  // // res.send(await analyzedResult.json());
  // res.send('ok')
});
