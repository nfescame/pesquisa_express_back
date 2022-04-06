const { Schema, model, Types } = require("mongoose");

const VoteSchema = new Schema({
  candidate: {
    type: String,
    required: true,
    trim: true,
  },
  ip: [
    {
      IPv4: {
        type: String,
        required: true,
        trim: true,
      },
      country_name: {
        type: String,
        required: true,
        trim: true,
      },
      country_code: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
      },
      latitude: {
        type: Number,
        required: true,
        trim: true,
      },
      longitude: {
        type: Number,
        required: true,
        trim: true,
      },
      postal: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
});

const VoteModel = model("Vote", VoteSchema);

module.exports = VoteModel;
