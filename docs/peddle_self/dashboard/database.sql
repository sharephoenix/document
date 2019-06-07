-- 创建用户表

CREATE DATABASE USERS;

CREATE TABLE USERS.USER_LOGIN (
  u_id CHAR(255) primary key,
  password TEXT,
  create_time DATETIME
);

CREATE TABLE USERS.USERINFO (
  u_id CHAR(255) primary key,
  phone_number TEXT,
  nickname TEXT,
  email DATETIME
);

-- 创建日志文档表
CREATE DATABASE DOCUMENTS;
CREATE TABLE DOCUMENTS.DOCUMENT_CATEGORY (
  type_id CHAR(255) primary key,
  type_des TEXT,
  create_time DATETIME
);

CREATE TABLE DOCUMENTS.DOCUMENT(
  document_id CHAR(255) PRIMARY KEY,
  type_id TEXT,
  title TEXT,
  subtitle TEXT,
  author_id TEXT,
  like_num INT,
  dislike_num INT,
  share_num INT,
  create_time DATETIME
);

-- 提出问题和问题解答
CREATE DATABASE ISSUES;
CREATE TABLE ISSUE_CATEGORY (
  issue_category_id CHAR(255) PRIMARY KEY,
  issue_des TEXT
);

CREATE TABLE ISSUE (
  issue_id CHAR(255) primary key,
  issue_category_id TEXT,
  issue TEXT,
  answer TEXT,
  create_time DATETIME
);