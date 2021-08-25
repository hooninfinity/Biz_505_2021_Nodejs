// express framework의 객체 선언
const express = require("express");
// express framework에서 routing을 수행하기 위한
// sub 객체 선언
const router = express.Router();

// models 폴더에서 정보를 읽어서
// tbl_bbs 객체를 사용할 수 있도록 선언, 초기화
// models/index.js 는 models 폴더에 있는
// table 설정과 관련된 파일들을 읽어서
// 객체로 return을 한다
// return 된 객체에서 table 객체 요소만 추출하여
// 사용하도록 전개연산을 수행한다.
const { tbl_bbs } = require("../models/index");

// tbl_bbs 테이블로부터 findAndCountAll() 메서드로 모든 데이터를 뽑아내어 그 값을 result로
/* GET home page. */
router.get("/", function (req, res, next) {
  tbl_bbs.findAndCountAll().then((result) => {
    console.log(result);
    res.render("index", { BBS: result.rows });
  });
});

module.exports = router;
