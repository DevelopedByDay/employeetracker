use employees;

INSERT INTO department
    (name)
VALUES
    ('IT'),
    ('HR'),
    ('Admin'),
    ('Sales');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Manager', 87000, 4),
    ('Sales Rep', 34000, 4),
    ('IT Manager', 79000, 1),
    ('IT Tech', 50000, 1),
    ('HR assistant', 32000, 2),
    ('CEO', 120000, 3),
    ('Assistant', 60000, 3);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Fred', 'Douglass', 1, 6),
    ('Sally', 'Fields', 5, 6),
    ('Georgia', 'Peach', 7, 6),
    ('Danny', 'Dimadome', 2, 1),
    ('Jimmy', 'Worlds', 6, NULL),
    ('Brad', 'Thomas', 3, 6),
    ('Joey', 'Wadle', 4, 3);
