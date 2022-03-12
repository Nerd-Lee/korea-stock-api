const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const request = require("request");
const router = express.Router();

router.get("/:page", (req, res, next) => {
  const params = req.params.page;

  const requestOptions = {
    method: "GET",
    uri: `https://finance.naver.com/sise/sise_market_sum.naver?&page=${params}`,
    headers: { "User-Agent": "Mozilla/5.0" },
    encoding: null,
  };

  request(requestOptions, (error, response, body) => {
    const $ = cheerio.load(iconv.decode(body, "EUC-KR"));
    let colArr = $("#contentarea > div.box_type_l > table.type_2 > tbody").toString();

    res.send(colArr);
  });
});

module.exports = router;
