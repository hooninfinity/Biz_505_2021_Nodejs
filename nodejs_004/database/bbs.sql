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

-- POS 시작
USE nodedb;
SHOW TABLES;
DESC tbl_products;

INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES
('P0001','김밥', 1000),
('P0002','참치김밥', 2000),
('P0003','어묵해장국', 3000),
('P0004','매운떡볶이', 3500),
('P0005','돈까스', 5000),
('P0006','참치비빔밥', 4000),
('P0007','콩물국수', 5000),
('P0008','새우튀김', 4000),
('P0009','김치찌개', 5000),
('P0010','라면', 3000);

SELECT * FROM tbl_products;
SELECT * FROM tbl_table_orders;


-- 2021-09-01 v2
USE nodeDB;
DROP TABLE tbl_table_orders;
DROP TABLE tbl_products;


SELECT to_table_id, count(to_table_id) AS count
FROM tbl_table_orders
WHERE to_pay IS NULL
GROUP BY to_table_id;











