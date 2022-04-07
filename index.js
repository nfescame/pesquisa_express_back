const express = require("express");
const app = express();
const cors = require("cors");
const CandidateModel = require("./models/Candidate.model");
const VoteModel = require("./models/Vote.model");
const DB = require("./DB/candidate.DB");

require("dotenv").config();
require("./config/db.config")();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json(DB);
});

app.get("/vote", async (req, res) => {
  const vote = await VoteModel.find();

  res.status(200).json(vote);
});

app.post("/candidate", async (req, res, next) => {
  try {
    const result = await CandidateModel.create({
      ...req.body,
    });

    return res.status(201).json(result);
  } catch (err) {
    return next(err);
  }
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

app.listen(process.env.PORT);