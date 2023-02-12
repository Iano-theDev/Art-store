CREATE TABLE Products
(
    productId VARCHAR(100) PRIMARY KEY,
    Name VARCHAR(200) ,
    Description VARCHAR(500),
    Category VARCHAR(150) ,
    Price VARCHAR(100),
    ImageUrl VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT GETDATE()
);
