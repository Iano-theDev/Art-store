CREATE TABLE Products
(
    productId VARCHAR(100) PRIMARY KEY,
    Name VARCHAR(200) ,
    Description VARCHAR(500),
    Category VARCHAR(150) ,
    Price VARCHAR(100),
    createdAt DATETIME NOT NULL DEFAULT GETDATE()
);
