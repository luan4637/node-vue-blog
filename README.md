# create database
CREATE DATABASE expressapp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'expressapp_user'@'localhost' IDENTIFIED BY 'expressapp_password';
GRANT ALL PRIVILEGES ON expressapp.* TO 'expressapp_user'@'localhost';
FLUSH PRIVILEGES;
