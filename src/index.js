const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const VoteModel = require("../models/Vote.model");
const DB = require("../DB/candidate.DB");

const app = express();

require("dotenv").config();
require("../config/db.config")();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json(DB);
});

app.get("/vote", async (req, res) => {
  const vote = await VoteModel.find();

  res.status(200).json(vote);
});

app.post("/vote", async (req, res, next) => {
  try {
    const result = await VoteModel.create({
      ...req.body,
    });

    return res.status(201).json(result);
  } catch (err) {
    return next(err);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.info("Aplicação rodando");
});
