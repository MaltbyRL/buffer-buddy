'use strict';

const express = require('express');
const router = express.Router();




router.use("/userFavorites", require("./userFavorites"));
router.use("/gameList", require("./gameList"));
router.use("/removeFavorites", require("./removeFavorites"));
router.use("/userInfo", require("./userInfo"));




module.exports = router;
