require("dotenv").config();
const express = require("express");
const fs = require("fs");
const verifyToken = require("./middleware/auth");
let rawdata = fs.readFileSync("db.json");
let database = JSON.parse(rawdata);
const jsonServer = require("json-server");
const app = express();
app.use(express.json());
// app.use("/api", jsonServer.defaults(), jsonServer.router("db.json"));

app.get("/api/campaigns", verifyToken, (req, res) => {
  res.json(
    database.campaigns.filter((campaign) => campaign.userId === req.userId)
  );
});

app.listen(4001, () => console.log("Server started on port 6000"));
