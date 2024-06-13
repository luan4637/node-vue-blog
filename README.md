# create database
CREATE DATABASE expressapp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'expressapp_user'@'localhost' IDENTIFIED BY 'expressapp_password';
GRANT ALL PRIVILEGES ON expressapp.* TO 'expressapp_user'@'localhost';
FLUSH PRIVILEGES;

import sample database at [ROOT]/db.sql

# install
[ROOT] -> npm install
[ROOT]/client -> npm install
[ROOT]/clientAdmin -> npm install

# build vuejs
[ROOT]/clientAdmin -> npm run watch
[ROOT]/client -> npm run watch

# start development nodejs server
[ROOT] -> npm run dev

# admin panel
http://localhost:3000/admin

# blog page
http://localhost:3000
