CREATE DATABASE IF NOT EXISTS dashboard;
use dashboard;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

insert into users (name,email,password,created_at) VALUES ('root','root@admin','0000','2024-09-03');
insert into users (name,email,password,created_at) VALUES ('user1','test@admin','0000','2024-09-03');

