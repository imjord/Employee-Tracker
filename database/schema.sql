

DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS roleboi; -- made it roleboi because role was blue and was triggering me
DROP TABLE IF EXISTS department;

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- id that auto increments whenever a new id is assigned primary key unique identifyer 
    first_name VARCHAR(30) NOT NULL, -- string max 30 length not null cant accept null values 
    last_name VARCHAR(30) NOT NULL, 
    rold_id INT,
    manager_id INT,
    CONSTRAINT fk_roleboi FOREIGN KEY (roleboi_id) REFERENCES roleboi(id)
)

CREATE TABLE roleboi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL, -- an exact fixed-point number according to w3schools lol
    department_id INT,
    CONSTRAINT fk_departmentboi FOREIGN KEY (department_id) REFERENCES department(id)   -- USING FOREIGN KEY TO REFERENCE THE PK IN OTHER TABLE 
)

CREATE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
)