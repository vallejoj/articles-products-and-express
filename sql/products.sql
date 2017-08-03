DROP DATABASE IF EXISTS products_articles;
DROP USER IF EXISTS teamjosh;

CREATE USER teamjosh WITH ENCRYPTED PASSWORD 'joshisthebest';
CREATE DATABASE products_articles WITH OWNER teamjosh;

\c products_articles teamjosh

DROP TABLE IF EXISTS products;
CREATE TABLE product_table(
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(30),
  price INT,
  inventory INT,
);

INSERT INTO pizzas VALUES
   (default, 'plain', 'cheese'),
   (default,'supreme' , 'everything'),
   (default,'tuscan', 'fanta'),
   (default,'pineapple', 'pepperoni');
