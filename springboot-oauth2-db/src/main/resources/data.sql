DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  FIRST_NAME VARCHAR(250) NOT NULL,
  Last_NAME VARCHAR(250) NOT NULL,
  email VARCHAR(250) NOT NULL,
  role VARCHAR(250)
);

INSERT INTO user (FIRST_NAME, Last_NAME, email, role) VALUES
  ('Steve', 'Roger', 'steve.rogers@gmail.com', null),
  ('Tony', 'Starks', 'tony.starks@gmail.com', 'ADMIN')
  ;