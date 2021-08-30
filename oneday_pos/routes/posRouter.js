const express = require("express");
const router = express.Router();
const { tbl_orders, tbl_product } = require("../models/index");

router.get("/list", (req, res) => {
  const { o_table } = req.query;
  const { table } = req.body;
});

module.exports = router;
