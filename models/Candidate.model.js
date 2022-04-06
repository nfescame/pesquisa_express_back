const { Schema, model, Types } = require("mongoose");

const CandidateSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const CandidateModel = model("Candidate", CandidateSchema);

module.exports = CandidateModel;
