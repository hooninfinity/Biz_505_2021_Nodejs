-- 모든 서버에서 접속할 수 있게 하겠다
-- % : 어디에서나 접근가능
CREATE USER 'gimbab'@'%' identified by '1234';

-- 모든 권한 부여
GRANT ALL privileges ON *.* TO 'gimbab'@'%';

CREATE DATABASE gimbabDB;
USE gimbabDB;