INSERT INTO department (name) VALUES
('OVERLORDS'),
('COOL PEOPLE'),
('BOSSES'),
('GAMER');
--  USING SEMI COLON TO END QUERY
INSERT INTO role(title, salary, department_id) VALUES
('Ruler of the world', 100000, 1),
('Ruler of the house', 100000, 2),
('Boss person', 10000, 3),
('Janitor', 50000, 4),
('Model', 600000, 2),
('Actor', 700000, 4),
('Cool guy', 700700700, 1);



INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
    ('COCO', 'BEAN', 1, 1),
    ('Jordan', 'Bro', 2, 2),
    ('GeGe', 'Bark', 3, 1),
    ('Mad', 'Hatter', 3, 2),
    ('Keanu', 'Reaves', 2, 2),
    ('Brad', 'Pitt', 3, 1),
    ('Tj', 'Roberts', 1, 1);