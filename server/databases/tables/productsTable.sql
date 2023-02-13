CREATE TABLE Products
(
    productId VARCHAR(100) PRIMARY KEY,
    Name VARCHAR(200) ,
    Description VARCHAR(500),
    Category VARCHAR(150) ,
<<<<<<< HEAD
    Price VARCHAR(100),
    ImageUrl VARCHAR(255) NOT NULL,
=======
    Price DECIMAL(10, 2),
>>>>>>> 1b347fb85d7bd9f114c49f1d2a16bd9a949982be
    createdAt DATETIME NOT NULL DEFAULT GETDATE()
);
