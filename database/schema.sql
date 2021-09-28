DROP DATABASE IF EXISTS Employee_Tracker;  -- DROPS THE DATABASE IF EMPLOYEE TRACKER IS ALREADY 
CREATE DATABASE Employee_Tracker; -- MY DATABASE 
USE Employee_Tracker; -- USING MY DATABSE 


CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- id that auto increments whenever a new id is assigned primary key unique identifyer 
    first_name VARCHAR(60) NOT NULL, -- string max 60 length not null cant accept null values 
    last_name VARCHAR(60) NOT NULL, 
)