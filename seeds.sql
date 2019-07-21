Create database burgers_db;
Use burgers_db;
Create Table burgers (
id int(11) NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (255) NOT NULL,
devoured BOOLEAN NOT NULL default 0,
PRIMARY KEY (id)
);