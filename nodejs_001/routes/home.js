const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Republic of Korea");
});

// app.js 설정이 /homes 로 요청이 되면
// home.js 를 실행하기 때문에
// 실제 요청은 localhost:3000/homes/my 로 요청을 한다
router.get("/my", (req, res) => {
  const html = "<div>Korea</div>";

  res.render("home", { nation: "대한민국", html });
});

module.exports = router;
