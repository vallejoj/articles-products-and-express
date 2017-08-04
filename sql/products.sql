DROP DATABASE IF EXISTS products_articles;
DROP USER IF EXISTS teamjosh;

CREATE USER teamjosh WITH ENCRYPTED PASSWORD 'joshisthebest';
CREATE DATABASE products_articles WITH OWNER teamjosh;

\c products_articles teamjosh

DROP TABLE IF EXISTS products_table;

CREATE TABLE products_table(
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(30),
  price INT,
  inventory INT
);

INSERT INTO products_table VALUES
   (default, 'pizza', 50, 100),
   (default,'bottle' , 60, 100),
   (default,'key', 66, 58),
   (default,'monkey', 55, 90);
