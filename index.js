const express = require("express");
const app = express();
const priceRouter = require("./routes/price");
const port = "3001";

app.use(express.json());
app.use("/api/stock", priceRouter);

app.listen(port, () => {
  console.log("서버 돌아가는 중...");
});

// const getHtml = async () => {
//   try {
//     return await axios.get("https://finance.naver.com/sise/sise_market_sum.naver");
//   } catch (error) {
//     console.error(error);
//   }
// };

// getHtml()
//   .then((html) => {
//     const decodeData = iconv.decode(html.data, "utf-8").toString();
//     const $ = cheerio.load(decodeData, { decodeEntities: true });
//     const data = {
//       ticker: $("#contentarea > div.box_type_l > table.type_2 > tbody > tr:nth-child(2) > td:nth-child(2) > a").attr(
//         "href"
//       ),
//       data: $("#contentarea > div.box_type_l > table.type_2 > tbody > tr:nth-child(2) > td:nth-child(2) > a").text(),
//     };
//     return data;
//   })
//   .then((res) => console.log(res));
