-- 创建用户表
CREATE TABLE USER_LOGIN (
  u_id CHARACTER primary key,
  password CHARACTER,
  create_time DATETIME
)

CREATE TABLE USERINFO (
  u_id CHARACTER primary key,
  phone_number CHARACTER,
  nickname CHARACTER,
  email DATETIME
)

-- 创建日志文档表
CREATE TABLE DOCUMENT_CATEGORY (
  type_id CHARACTER primary key,
  type_des CHARACTER,
  create_time DATETIME
)

CREATE TABLE DOCUMENT(
  document_id CHARACTER PRIMARY KEY,
  type_id CHARACTER,
  title CHARACTER,
  subtitle CHARACTER,
  author_id CHARACTER,
  like_num INT,
  dislike_num INT,
  share_num INT,
  create_time DATETIME
)

-- 提出问题和问题解答
CREATE TABLE ISSUE_CATEGORY (
  issue_category_id CHARACTER PRIMARY KEY,
  issue_des CHARACTER
)

CREATE TABLE ISSUE (
  issue_id CHARACTER,
  issue_category_id CHARACTER,
  issue CHARACTER,
  answer CHARACTER,
  create_time DATETIME
)