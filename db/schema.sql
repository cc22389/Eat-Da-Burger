drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (200) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);