(function() {
  "use strict";
  const mongoose = require("mongoose");

  let userShema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false
    },
    userName: {
      type: String,
      required: false
    },
    favoritedGames: {
      type: String,
      required: false
    },
    allTheGames: {
      type: Array,
      required: false
    },
    timeStamp: {
      type: Number
    },
    status: {
      type: String,
      default: "Unfavorited"
    } //Between "Favorited", "Unfavorited"
  })

  const User = mongoose.model("userShema", userShema);

  module.exports = User;
}());
