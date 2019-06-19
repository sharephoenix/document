CREATE DATABASE IF NOT EXISTS WeexDemo;

CREATE TABLE IF NOT EXISTS WeexDemo.Modules(
  module_id char(255) primary key,
  module_name char(255),
  module_display_name char(255),
  module_index char(255)
);

CREATE TABLE IF NOT EXISTS WeexDemo.Events(
  module_id char(255),
  event_id char(255),
  event_name char(255),
  event_display_name char(255),
  event_params_parse boolean,
  event_params Text,
  is_enable boolean,
  event_des char(255),
  primary key (event_id,module_id)
);

CREATE TABLE IF NOT EXISTS WeexDemo.Users(
  user_id int primary key auto_increment,
  user_name varchar(255),
  avatar varchar(255),
  phone_number char(255),
  e_mail varchar(255),
  password varchar(255),
  token varchar(255) default '',
  address varchar(255)
);

insert WeexDemo.Users(user_id, user_name, avatar, phone_number, e_mail, address) values(1000, 'alex'
,'http://xxx', '18817322819', '326083325@qq.com', '上海浦东');
update WeexDemo.Users set password='qwer1234' where user_id=1000;