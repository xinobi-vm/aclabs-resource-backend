const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    server: {
      status: "Resource Backend Server",
    },
  });
});

router.get("/org", (req, res) => {
  res.json({
    org: "AC Labs - BackEnd Resource Server",
    api: {
      type: "public",
    },
  });
});

app.use("/", router);

module.exports.handler = serverless(app);
