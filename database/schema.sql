DROP DATABASE IF EXISTS Employee_Tracker;  -- DROPS THE DATABASE IF EMPLOYEE TRACKER IS ALREADY 
CREATE DATABASE Employee_Tracker; -- MY DATABASE 
USE Employee_Tracker; -- USING MY DATABSE 


CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- id that auto increments whenever a new id is assigned primary key unique identifyer 
    first_name VARCHAR(30) NOT NULL, -- string max 30 length not null cant accept null values 
    last_name VARCHAR(30) NOT NULL, 
    rold_id INT
    manager_id INT
)

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL
    salary DECIMAL -- an exact fixed-point number according to w3schools lol
)

CREATE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
)