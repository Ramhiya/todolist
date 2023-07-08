CREATE DATABASE IF NOT EXISTS sales;

USE sales;

CREATE TABLE IF NOT EXISTS orders (
  order_id INT,
  customer_id INT,
  order_date DATE,
  order_total DECIMAL(10, 2)
);
