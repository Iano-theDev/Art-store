CREATE TABLE Orders
(
    orderId VARCHAR PRIMARY KEY NOT NULL,
    productId VARCHAR(100) NOT NULL,
    userId VARCHAR(100)NOT NULL,
    orderStatus VARCHAR(50) NOT NULL CHECK(orderStatus IN('ordered', 'in-transit', 'delivered')),
    FOREIGN KEY (productId) REFERENCES Products(productId),
    FOREIGN KEY (userId) REFERENCES Users(userId),
    createdAt DATETIME NOT NULL DEFAULT GETDATE()
);
