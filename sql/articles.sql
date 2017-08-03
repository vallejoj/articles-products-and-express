DROP DATABASE IF EXISTS products_articles;
DROP USER IF EXISTS teamjosh;

CREATE USER teamjosh WITH ENCRYPTED PASSWORD 'joshisthebest';
CREATE DATABASE products_articles WITH OWNER teamjosh;

\c products_articles teamjosh

DROP TABLE IF EXISTS articles;
CREATE TABLE article_table(
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(30),
  body VARCHAR(100),
  author VARCHAR(30),
  urlTitle VARCHAR(30) NOT NULL
);

INSERT INTO articles VALUES
   (default, 'plain', 'cheese'),
   (default,'supreme' , 'everything'),
   (default,'tuscan', 'fanta'),
   (default,'pineapple', 'pepperoni');
