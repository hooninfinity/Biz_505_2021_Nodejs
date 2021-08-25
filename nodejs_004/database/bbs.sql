-- 모든 서버에서 접속할 수 있게 하겠다
-- % : 어디에서나 접근가능
CREATE USER 'node'@'%' identified by '12341234';

-- 모든 권한 부여
GRANT ALL privileges ON *.* TO 'node'@'%';

CREATE DATABASE nodeDB;
USE nodeDB;
DESC tbl_bbs;
DROP TABLE tbl_bbs;
DESC tbl_bbs;
SELECT * FROM tbl_bbs;


USE nodedb;
DESC tbl_replies;

DROP TABLE tbl_replies;
DROP TABLE tbl_bbs;

SELECT * FROM tbl_replies;






