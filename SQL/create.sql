CREATE TABLE Books (
     book_id SERIAL PRIMARY KEY,
     title TEXT NOT NULL, 
     author TEXT NOT NULL, 
     genre TEXT, 
     published_year INT, 
     isbn TEXT UNIQUE, 
     price DECIMAL(10, 2), 
     rating DECIMAL(3, 2), 
     stock_count INT 
     );