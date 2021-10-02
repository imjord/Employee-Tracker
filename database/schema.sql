

DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS roleboi; -- made it roleboi because role was blue and was triggering me
DROP TABLE IF EXISTS department;



CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

-- CREATE department (
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(30)
-- );


CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL, -- an exact fixed-point number according to w3schools lol
    department_id INTEGER,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)   -- USING FOREIGN KEY TO REFERENCE THE PK IN OTHER TABLE 
);


CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,  -- id that auto increments whenever a new id is assigned primary key unique identifyer 
    first_name VARCHAR(30) NOT NULL, -- string max 30 length not null cant accept null values 
    last_name VARCHAR(30) NOT NULL, 
    role_id INTEGER,
    manager_id INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id)
);



