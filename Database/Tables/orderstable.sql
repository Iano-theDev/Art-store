CREATE TABLE Orders (
    orderId VARCHAR NOT NULL,
    productId VARCHAR(100) NOT NULL,
    userId VARCHAR(100)NOT NULL,
    PRIMARY KEY (orderId),
    FOREIGN KEY (productId) REFERENCES Products(productId),
	FOREIGN KEY (userId) REFERENCES Users(userId)
);